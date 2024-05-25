import styles from "./footer.module.scss";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { useScroll } from "@/components/ScrollContext";
import { useEffect, useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [atBottom, setAtBottom] = useState(false);
  const scrollY = useScroll();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <div>
          <a className={styles.backToTop} href="#top" title="back to top">
            <Icon iconName="arrow-up" />
            <span>Home</span>
          </a>
          <p className={styles.copywrite}>Lisa Liebermann © {currentYear}</p>
        </div>
        <div className={styles.logo}>
          <Image
            src="/logo-footer.svg"
            alt="Lisa Pottery logo"
            width={280}
            height={158}
          />
        </div>
      </div>
    </footer>
  );
};
