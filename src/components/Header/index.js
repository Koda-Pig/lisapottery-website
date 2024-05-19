"use client";
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    const doc = document.documentElement;
    if (hamburgerOpen) doc.classList.add("freeze");
    else doc.classList.remove("freeze");

    return () => {
      doc.classList.remove("freeze");
    };
  }, [hamburgerOpen]);

  return (
    <header className={styles.header}>
      <button
        className={`${styles.hamburger} ${hamburgerOpen ? styles.open : ""}`}
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
            height={100}
            priority
          />
        </div>
        <div className={`${styles.menu} ${hamburgerOpen ? styles.open : ""}`}>
          <ul className={styles.menu_inner}>
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#collection">Collection</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a className={styles.cta} href="#contact">
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
  return (
    <div className={styles.static_logo}>
      <Image
        src="/logo-lower.svg"
        alt="Yellow vase"
        width={510}
        height={172}
        priority
      />
    </div>
  );
};
