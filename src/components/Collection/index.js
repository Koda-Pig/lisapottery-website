import Image from "next/image";
import styles from "./collection.module.scss";

export const Collection = () => {
  const images = Array.from({ length: 9 });

  return (
    <div className={styles.collection}>
      {images.map((_, i) => {
        return (
          <div className={styles.image__wrapper} key={i}>
            <Image
              key={i}
              src="https://spaceholder.cc/i/800x600"
              alt="Yellow vase"
              width={1024}
              height={1280}
              priority
              unoptimized={true}
            />
          </div>
        );
      })}
    </div>
  );
};
