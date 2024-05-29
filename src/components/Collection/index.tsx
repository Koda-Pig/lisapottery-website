"use client";
import Image from "next/image";
import styles from "./collection.module.scss";
import { useState, useEffect } from "react";
import { Icon } from "../Icon";

interface ImageProps {
  id: string;
  src: string;
}

interface CollectionProps {
  images: ImageProps[];
}

interface CollectionComponentProps {
  props: CollectionProps;
}

export const Collection = ({
  props
}: CollectionComponentProps): JSX.Element => {
  const images = props.images;
  const [selected, setSelected] = useState<number | null>(null);
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (selected !== null) {
      setGalleryOpen(true);
    }
  }, [selected]);

  useEffect(() => {
    const handleLoading = () => setLoading(false);
    if (images.length > 0) {
      setLoading(true);
      Promise.all(
        images.map(
          (image) =>
            new Promise<void>((resolve) => {
              const img = new window.Image();
              img.src = image.src;
              img.width = 760;
              img.height = 760;
              img.onload = () => resolve();
            })
        )
      ).then(handleLoading);
    }
  }, [images]);

  const handlePrevious = () => {
    if (selected === null) return;
    setSelected((prevSelected) =>
      prevSelected === 0 ? images.length - 1 : prevSelected! - 1
    );
  };

  const handleNext = () => {
    if (selected === null) return;
    setSelected((prevSelected) =>
      prevSelected === images.length - 1 ? 0 : prevSelected! + 1
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
            disabled={selected === 0}
          >
            <Icon iconName="arrow-left" />
          </button>
          <button
            type="button"
            title="next"
            className={`${styles.button} ${styles.button_centered} ${styles.button_next}`}
            onClick={handleNext}
            disabled={selected === images.length - 1}
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
              style={{ transform: `translateX(-${selected! * 100}%)` }}
            >
              {images.map((image, i) => (
                <div
                  className={`${styles.static_image} ${
                    i === selected ? styles.selected : ""
                  }`}
                  key={image.id}
                >
                  <div className={styles.loader_wrapper} aria-hidden={true}>
                    <div className={styles.loader}></div>
                  </div>
                  <Image
                    src={image.src}
                    alt="Yellow vase"
                    width={760}
                    height={760}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
