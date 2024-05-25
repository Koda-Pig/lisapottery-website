"use client";
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useScroll } from "@/components/ScrollContext";

export const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [shiftToTop, setShiftToTop] = useState(false);
  const scrollY = useScroll();
  const hamburgerClasses = [styles.hamburger, hamburgerOpen ? styles.open : ""];

  useEffect(() => {
    const doc = document.documentElement;
    if (hamburgerOpen) doc.classList.add("freeze");
    else doc.classList.remove("freeze");

    window.addEventListener("resize", () => setHamburgerOpen(false));

    return () => {
      doc.classList.remove("freeze");
    };
  }, [hamburgerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShiftToTop(0 - scrollY);
      if (scrollY > 200) {
        setShiftToTop(true);
      } else {
        setShiftToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${styles.header} ${shiftToTop ? styles.shiftToTop : ""}`}
    >
      <button
        className={hamburgerClasses.join(" ")}
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
        aria-controls="navigation"
        aria-expanded={hamburgerOpen}
      >
        <svg viewBox="0 0 100 100">
          <path
            d="M30 33h40c3.723 0 7.5 3.126 7.5 8.578S74.773 50 70 50H50"
            className={styles.top}
          />
          <path d="M30 50h40" className={styles.middle} />
          <path
            d="M70 67H30s-7.5-.802-7.5-8.366C22.5 51.071 30 50 30 50h20"
            className={styles.bottom}
          />
        </svg>
      </button>
      <nav className={styles.header_inner}>
        <div className={styles.logo}>
          <Image
            src="/logo-upper.svg"
            alt="Lisa Liebermann logo upper"
            width={510}
            height={128}
            priority
          />
        </div>
        <div className={`${styles.menu} ${hamburgerOpen ? styles.open : ""}`}>
          <ul className={styles.menu_inner}>
            <li>
              <a onClick={() => setHamburgerOpen(false)} href="#top">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setHamburgerOpen(false)} href="#collection">
                Collection
              </a>
            </li>
            <li>
              <a onClick={() => setHamburgerOpen(false)} href="#about">
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className={styles.cta}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export const HeaderLogoStatic = () => {
  const [logoOpacity, setlogoOpacity] = useState(1);
  const scrollY = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const opacity = 1 - (scrollY * 8) / window.innerHeight;
      setlogoOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={styles.static_logo}>
      <Image
        style={{ "--scroll-y": `${logoOpacity}` }}
        src="/logo-lower.svg"
        alt="Lisa Liebermann logo lower"
        width={510}
        height={172}
      />
    </div>
  );
};
