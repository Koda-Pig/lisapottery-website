import styles from "./footer.module.scss";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <div className={styles.logo}>
          <Image
            src="/logo-footer.svg"
            alt="Lisa Pottery logo"
            width={280}
            height={158}
          />
        </div>
        <div className={styles.copywrite}>
          <p>Lisa Liebermann © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};
