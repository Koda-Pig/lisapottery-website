import styles from "./back-to-top.module.scss";
import { Icon } from "@/components/Icon";
import { useScroll } from "@/components/ScrollContext";
import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const scrollY = useScroll();

  useEffect(() => {
    const handleVisibility = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const distanceFromBottom = scrollableHeight - scrollY;

      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (distanceFromBottom > 100) {
        setAtBottom(false);
      } else {
        setAtBottom(true);
      }

      console.log(window.innerWidth);

      if (window.innerWidth > 1128) {
        setIsWide(true);
      } else {
        setIsWide(false);
      }
    };

    handleVisibility(); // Initial check
  }, [scrollY]);

  return (
    <a
      className={`${styles.backToTop} ${isVisible ? styles.show : ""} ${
        atBottom ? styles.bottom : ""
      } ${isWide ? styles.wide : ""}`}
      href="#top"
      title="back to top"
    >
      <Icon iconName="arrow-up" />
    </a>
  );
};
