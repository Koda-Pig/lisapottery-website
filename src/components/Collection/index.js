"use client";
import Image from "next/image";
import styles from "./collection.module.scss";
import { useState, useEffect } from "react";
import { Icon } from "../Icon";

export const Collection = ({ props }) => {
  const images = props.images;
  const [selected, setSelected] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fullWidthLoading, setFullWidthLoading] = useState(false);

  useEffect(() => {
    if (selected !== null) {
      setGalleryOpen(true);
      setFullWidthLoading(true);
      const img = new window.Image();
      img.src = images[selected].src;
      img.onload = () => setFullWidthLoading(false);
    }
  }, [selected, images]);

  useEffect(() => {
    const handleLoading = () => {
      // setTimeout(() => {
      setLoading(false);
      // }, 5000);
    };
    if (images.length > 0) {
      setLoading(true);
      Promise.all(
        images.map(
          (image) =>
            new Promise((resolve) => {
              const img = new window.Image();
              img.src = image.src;
              img.onload = resolve;
            })
        )
      ).then(handleLoading);
    }
  }, [images]);

  const handlePrevious = () => {
    if (selected === null) return;
    setSelected((prevSelected) =>
      prevSelected === 0 ? images.length - 1 : prevSelected - 1
    );
  };

  const handleNext = () => {
    if (selected === null) return;
    setSelected((prevSelected) =>
      prevSelected === images.length - 1 ? 0 : prevSelected + 1
    );
  };

  const handleClose = () => {
    setSelected(null);
    setGalleryOpen(false);
  };

  return (
    <div
      className={`${styles.collection} ${
        selected !== null ? styles.has_selected : ""
      }`}
    >
      {loading ? (
        <div className={styles.loader_wrapper} aria-hidden={true}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <>
          {/* buttons */}
          <button
            type="button"
            title="close"
            className={`${styles.button} ${styles.button_close}`}
            onClick={handleClose}
          >
            <Icon iconName="close" />
          </button>
          <button
            type="button"
            title="previous"
            className={`${styles.button} ${styles.button_centered} ${styles.button_previous}`}
            onClick={handlePrevious}
          >
            <Icon iconName="arrow-left" />
          </button>
          <button
            type="button"
            title="next"
            className={`${styles.button} ${styles.button_centered} ${styles.button_next}`}
            onClick={handleNext}
          >
            <Icon iconName="arrow-right" />
          </button>

          {/* grid images */}
          <div className={styles.grid}>
            {images.map((image, i) => (
              <div
                className={`${styles.image_wrapper} ${
                  selected === i ? styles.selected : ""
                }`}
                key={image.id}
                onClick={() => setSelected(i)}
              >
                <Image
                  src={image.src}
                  alt="Yellow vase"
                  width={248}
                  height={248}
                />
              </div>
            ))}
          </div>

          {/* fullwidth images */}
          {galleryOpen && (
            <div
              className={`${styles.fullscreen_gallery} ${
                galleryOpen ? styles.slide_transition_enabled : ""
              }`}
              style={{ transform: `translateX(-${selected * 100}%)` }}
            >
              {fullWidthLoading ? (
                <div className={styles.loader_wrapper} aria-hidden={true}>
                  <div className={styles.loader}></div>
                </div>
              ) : (
                images.map((image, i) => (
                  <div
                    className={`${styles.static_image} ${
                      i === selected ? styles.selected : ""
                    }`}
                    key={image.id}
                  >
                    <Image
                      src={image.src}
                      alt="Yellow vase"
                      width={760}
                      height={760}
                    />
                  </div>
                ))
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
