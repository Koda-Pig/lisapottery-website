"use client";
import Image from "next/image";
import styles from "./collection.module.scss";
import { useState } from "react";
import { Icon } from "../Icon";

export const Collection = () => {
  const [selected, setSelected] = useState(null);

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

  const images = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 }
  ];

  return (
    <div
      className={`${styles.collection} ${
        selected !== null ? styles.has_selected : ""
      }`}
    >
      {/* buttons */}
      <button
        type="button"
        title="close"
        className={`${styles.button} ${styles.button_close}`}
        onClick={() => {
          setSelected(null);
        }}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/gallery/placeholders/placeholder${image.id}.jpg`}
              alt="Yellow vase"
              width={1024}
              height={1280}
            />
          </div>
        ))}
      </div>

      {/* fullwidth images */}
      {images.map((image, i) => (
        <div
          className={`${styles.static_image} ${
            i === selected ? styles.selected : ""
          }`}
          key={image.id}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/gallery/placeholders/placeholder${image.id}.jpg`}
            alt="Yellow vase"
            width={1024}
            height={1280}
          />
        </div>
      ))}
    </div>
  );
};
