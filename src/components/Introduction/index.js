import styles from "./introduction.module.scss";
import { Expandable } from "@/components/Expandable";
import Image from "next/image";

export const Introduction = ({
  title,
  image1,
  image2,
  image3,
  text1,
  text2,
  text3,
  text4
}) => {
  return (
    <div className={styles.introduction}>
      <div className={`${styles.featured_image} ${styles.block_1}`}>
        <Image
          src={image1.src}
          alt={image1.alt}
          width={image1.width}
          height={image1.height}
          priority
        />
      </div>

      <div className={`${styles.text_section} ${styles.block_2}`}>
        <h1>{title}</h1>
      </div>

      <div className={`${styles.text_section} ${styles.block_3}`}>
        <p>{text1.trim()}...</p>
        <Expandable
          title="Read more"
          label="read-more-introduction"
          content={
            <p>
              {text3} {text2}
            </p>
          }
        />
      </div>

      <div className={`${styles.image_pair} ${styles.block_4}`} id="image-pair">
        <Image
          src={image2.src}
          alt={image2.alt}
          width={image2.width}
          height={image2.height}
          className={styles.image_first}
        />
        <Image
          src={image3.src}
          alt={image3.alt}
          width={image3.width}
          height={image3.height}
          className={styles.image_second}
        />
      </div>

      <div
        className={`${styles.text_section} ${styles.block_5}`}
        id="text-section"
      >
        <p>{text3.trim()}...</p>
        <Expandable
          title="Read more"
          label="read-more-goals"
          content={<p>{text4}</p>}
        />
      </div>
    </div>
  );
};