"use client";
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useScroll } from "@/components/ScrollContext";

export const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [shiftToTop, setShiftToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
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
      if (scrollY > 200) setShiftToTop(true);
      else setShiftToTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 417.0811 109.842"
            alt="Lisa Liebermann logo upper"
            width={510}
            height={95}
          >
            <g className="dark">
              <path
                d="M126.2 41.8c0 10.9.3 15.6 1.6 16.9 1.2 1.2 3.1 1.7 8.9 1.7 3.9 0 7.2-.1 8.9-2.2 1-1.2 1.7-3 1.9-4.4.1-.6.2-1 .7-1 .4 0 .4.3.4 1.1s-.5 5.2-1.1 7.4c-.5 1.7-.7 2-4.7 2-5.3 0-9.2-.1-12.3-.2-3.1-.1-5.4-.2-7.5-.2-.3 0-1.6.1-3 .1-1.5.1-3.1.1-4.2.1-.8 0-1.2-.1-1.2-.6 0-.2.1-.4.6-.4.7 0 1.6-.1 2.2-.3 1.5-.3 1.8-1.9 2.1-4.1.4-3.1.4-8.9.4-16v-13c0-11.5 0-13.6-.1-15.9-.1-2.5-.7-3.7-3.2-4.2-.6-.1-1.8-.2-2.5-.2-.3 0-.6-.1-.6-.4 0-.4.4-.6 1.2-.6 3.3 0 8 .2 8.3.2.4 0 5.8-.2 8-.2.8 0 1.2.1 1.2.6 0 .3-.3.4-.6.4-.5 0-1.6.1-2.4.2-2.1.4-2.7 1.6-2.9 4.2-.1 2.4-.1 4.4-.1 15.9v13.1zM167.9 44.9c0 6.1 0 11 .3 13.6.2 1.8.4 3 2.4 3.3 1 .1 2.4.3 3 .3.4 0 .5.3.5.5 0 .3-.3.5-1 .5-3.6 0-7.8-.2-8.1-.2-.4 0-4.4.2-6.4.2-.7 0-1-.1-1-.5 0-.2.1-.5.5-.5.6 0 1.4-.1 2-.3 1.3-.3 1.5-1.5 1.7-3.3.3-2.6.4-7.5.4-13.6V33.8c0-9.7 0-11.5-.1-13.5-.1-2.1-.7-3.1-2.1-3.4-.7-.1-1.6-.2-2-.2-.3 0-.5-.3-.5-.5 0-.4.3-.5 1-.5 2.1 0 6.2.1 6.6.1.3 0 4.5-.1 6.5-.1.7 0 1 .1 1 .5 0 .2-.3.5-.5.5-.4 0-.9 0-1.6.1-1.8.4-2.1 1.3-2.3 3.5-.1 2-.1 3.8-.1 13.5v11.1zM185.3 62.2c-.9-.4-1-.7-1-2.4 0-3.1.3-5.6.4-6.6 0-.7.1-1 .5-1s.6.2.6.7c0 .5 0 1.4.2 2.3 1 4.6 5.9 6.2 10.3 6.2 6.4 0 9.7-3.6 9.7-8.3 0-4.5-2.4-6.6-8.2-10.9l-3-2.2c-7-5.2-9.3-9.1-9.3-13.4 0-7.4 5.8-11.8 14.4-11.8 2.6 0 5.2.4 6.7.7 1.3.3 1.8.3 2.3.3.5 0 .7.1.7.4 0 .3-.3 2.4-.3 6.6 0 1-.1 1.4-.5 1.4s-.5-.3-.6-.8c-.1-.7-.6-2.4-1-3.1-.4-.7-2.6-3.1-8.4-3.1-4.7 0-8.6 2.4-8.6 6.8 0 4 2 6.3 8.4 10.6l1.8 1.3c7.9 5.4 10.6 9.7 10.6 15.1 0 3.7-1.4 7.7-6.1 10.7-2.7 1.8-6.8 2.2-10.3 2.2-2.9 0-6.7-.4-9.3-1.7zM239.4 16.9c.8-2.1 1.1-2.4 1.6-2.4.7 0 .9.9 1.6 2.3 1.2 2.7 11.6 28.6 15.6 38.1 2.4 5.6 4.1 6.4 5.5 6.9 1 .3 1.9.4 2.6.4.4 0 .8.1.8.5s-.7.5-1.5.5c-1 0-5.8 0-10.3-.1-1.3-.1-2.3-.1-2.3-.4 0-.3.1-.3.4-.4.4-.1 1-.7.6-1.7L248.1 46c-.1-.3-.2-.4-.6-.4h-15c-.3 0-.5.1-.7.5l-3.7 10c-.6 1.6-1 3.1-1 4.2 0 1.3 1.1 1.7 2.2 1.7h.6c.5 0 .7.2.7.5 0 .4-.4.5-1 .5-1.6 0-5.1-.2-5.8-.2-.7 0-3.9.2-6.6.2-.8 0-1.3-.1-1.3-.5 0-.3.3-.5.6-.5.4 0 1.4-.1 1.9-.1 3-.4 4.2-2.6 5.5-5.8l15.5-39.2zm7.2 26.1c.3 0 .3-.1.2-.4l-6.4-17.2c-.4-1-.7-1-1.1 0l-6.1 17.2c-.1.3 0 .4.2.4h13.2z"
                style={{
                  fill: "#22394c"
                }}
                transform={`matrix(.8844 0 0 .8844 ${
                  isMobile ? -82 : -145
                } -6.545)`}
              />
            </g>
            <g className="dark">
              <path
                d="M78.2 109.9c0 10.9.3 15.6 1.6 16.9 1.2 1.2 3.1 1.7 8.9 1.7 3.9 0 7.2-.1 8.9-2.2 1-1.2 1.7-3 1.9-4.4.1-.6.2-1 .7-1 .4 0 .4.3.4 1.1s-.5 5.2-1.1 7.4c-.5 1.7-.7 2-4.7 2-5.3 0-9.2-.1-12.3-.2-3.1-.1-5.4-.2-7.5-.2-.3 0-1.6.1-3 .1-1.5.1-3.1.1-4.2.1-.8 0-1.2-.1-1.2-.6 0-.2.1-.4.6-.4.7 0 1.6-.1 2.2-.3 1.5-.3 1.8-1.9 2.1-4.1.4-3.1.4-8.9.4-16v-13c0-11.5 0-13.6-.1-15.9-.1-2.5-.7-3.7-3.2-4.2-.6-.1-1.8-.2-2.5-.2-.3 0-.6-.1-.6-.4 0-.4.4-.6 1.2-.6 3.3 0 8 .2 8.3.2.4 0 5.8-.2 8-.2.8 0 1.2.1 1.2.6 0 .3-.3.4-.6.4-.5 0-1.6.1-2.4.2-2.1.4-2.7 1.6-2.9 4.2-.1 2.4-.1 4.4-.1 15.9v13.1zM119.9 112.9c0 6.1 0 11 .3 13.6.2 1.8.4 3 2.4 3.3 1 .1 2.4.3 3 .3.4 0 .5.3.5.5 0 .3-.3.5-1 .5-3.6 0-7.8-.2-8.1-.2-.4 0-4.4.2-6.4.2-.7 0-1-.1-1-.5 0-.2.1-.5.5-.5.6 0 1.4-.1 2-.3 1.3-.3 1.5-1.5 1.7-3.3.3-2.6.4-7.5.4-13.6v-11.1c0-9.7 0-11.5-.1-13.5-.1-2.1-.7-3.1-2.1-3.4-.7-.1-1.6-.2-2-.2-.3 0-.5-.3-.5-.5 0-.4.3-.5 1-.5 2.1 0 6.2.1 6.6.1.3 0 4.5-.1 6.5-.1.7 0 1 .1 1 .5 0 .2-.3.5-.5.5-.4 0-.9 0-1.6.1-1.8.4-2.1 1.3-2.3 3.5-.1 2-.1 3.8-.1 13.5v11.1zM141.3 101.8c0-9.7 0-11.5-.1-13.5-.1-2.1-.5-3.2-2.7-3.5-.5-.1-1.6-.1-2.2-.1-.2 0-.5-.3-.5-.5 0-.4.3-.5 1-.5 3 0 7.2.1 7.5.1.4 0 14 .1 15.5 0 1.3-.1 2.4-.3 3-.4.3-.1.6-.3.9-.3.2 0 .3.3.3.6 0 .4-.4 1.2-.5 3-.1.6-.2 3.4-.4 4.1-.1.3-.3.7-.6.7-.4 0-.5-.3-.5-.8 0-.4-.1-1.5-.4-2.2-.4-1-1.1-1.5-4.7-1.9-1.1-.1-8.6-.2-9.4-.2-.3 0-.4.2-.4.7V104c0 .4 0 .7.4.7.8 0 9.4 0 10.9-.1 1.6-.1 2.5-.2 3.2-.9.4-.4.7-.8 1-.8.2 0 .4.1.4.5s-.4 1.4-.5 3.5c-.1 1.3-.3 3.6-.3 4.1 0 .5-.1 1.2-.6 1.2-.3 0-.4-.2-.4-.6 0-.6 0-1.3-.3-2.1-.2-.9-.8-1.6-3.3-1.9-1.8-.2-8.7-.3-9.8-.3-.4 0-.4.2-.4.4v5.2c0 2.1-.1 9.5 0 10.7.1 4.2 1.3 5 7.8 5 1.7 0 4.8 0 6.5-.7 1.7-.7 2.6-1.8 3-4.4.1-.7.3-1 .7-1 .4 0 .4.5.4 1 0 .4-.5 4.7-.9 6.1-.4 1.6-1.1 1.6-3.6 1.6-4.9 0-8.6-.1-11.3-.2-2.7-.1-4.4-.1-5.4-.1-.1 0-1.4 0-2.8.1-1.3.1-2.7.1-3.8.1-.7 0-1-.1-1-.5 0-.2.1-.5.5-.5.6 0 1.4-.2 2-.3 1.3-.2 1.4-1.5 1.7-3.3.4-2.6.4-7.5.4-13.6v-11.1zM182 101.8c0-9.7 0-11.5-.1-13.5-.1-2.1-.5-3.3-2.7-3.6-.5-.1-1.6-.1-2.2-.1-.2 0-.5-.1-.5-.4 0-.4.3-.5 1-.5 3 0 7.2.1 7.5.1 1.6 0 4.6-.1 7.6-.1 10.9 0 13.7 6.3 13.7 9.6 0 4.9-3.3 8-6.6 11 4.9 1.5 11.4 6 11.4 13.1 0 7-5.2 14-16.3 14-1.2 0-3.5-.1-5.6-.2-2.1-.1-3.9-.1-4.2-.1-.1 0-1.3.1-2.7.1-1.3.1-2.9.1-3.9.1-.7 0-1-.1-1-.5 0-.2.1-.4.5-.4.6 0 1.4-.2 2-.3 1.3-.2 1.4-1.6 1.7-3.5.4-2.6.4-7.5.4-13.6v-11.2zm5.7 1.3c0 .4.1.6.4.7.4.1 1.6.3 4 .3 3.6 0 5-.1 6.4-1.6 1.4-1.6 2.5-3.7 2.5-6.7 0-4.8-2.7-10.1-9.2-10.1-.7 0-2.3.1-3.3.3-.6.1-.8.3-.8.7v16.4zm0 7c0 4.9 0 12.4.1 13.4.2 3 .2 3.8 2.2 4.7 1.8.8 4.5.9 5.7.9 4.3 0 9.5-1.6 9.5-9.7 0-2.8-1.1-8.2-6.2-11.4-2.2-1.4-4.3-1.3-5.8-1.6-.8-.1-4.1-.1-5.1-.1-.2 0-.4.1-.4.4v3.4zM225.2 101.8c0-9.7 0-11.5-.1-13.5-.1-2.1-.5-3.2-2.7-3.5-.5-.1-1.6-.1-2.2-.1-.2 0-.5-.3-.5-.5 0-.4.3-.5 1-.5 3 0 7.2.1 7.5.1.4 0 14 .1 15.5 0 1.3-.1 2.4-.3 3-.4.3-.1.6-.3.9-.3.2 0 .3.3.3.6 0 .4-.4 1.2-.5 3-.1.6-.2 3.4-.4 4.1-.1.3-.3.7-.6.7-.4 0-.5-.3-.5-.8 0-.4-.1-1.5-.4-2.2-.4-1-1.1-1.5-4.7-1.9-1.1-.1-8.6-.2-9.4-.2-.3 0-.4.2-.4.7V104c0 .4 0 .7.4.7.8 0 9.4 0 10.9-.1 1.6-.1 2.5-.2 3.2-.9.4-.4.7-.8 1-.8.2 0 .4.1.4.5s-.4 1.4-.5 3.5c-.1 1.3-.3 3.6-.3 4.1 0 .5-.1 1.2-.6 1.2-.3 0-.4-.2-.4-.6 0-.6 0-1.3-.3-2.1-.2-.9-.8-1.6-3.3-1.9-1.8-.2-8.7-.3-9.8-.3-.4 0-.4.2-.4.4v5.2c0 2.1-.1 9.5 0 10.7.1 4.2 1.3 5 7.8 5 1.7 0 4.8 0 6.5-.7 1.7-.7 2.6-1.8 3-4.4.1-.7.3-1 .7-1 .4 0 .4.5.4 1 0 .4-.5 4.7-.9 6.1-.4 1.6-1.1 1.6-3.6 1.6-4.9 0-8.6-.1-11.3-.2-2.7-.1-4.4-.1-5.4-.1-.1 0-1.4 0-2.8.1-1.3.1-2.7.1-3.8.1-.7 0-1-.1-1-.5 0-.2.1-.5.5-.5.6 0 1.4-.2 2-.3 1.3-.2 1.4-1.5 1.7-3.3.4-2.6.4-7.5.4-13.6v-11.1zM265.9 101.8c0-9.7 0-11.5-.1-13.5-.1-2.1-.5-3.2-2.7-3.5-.5-.1-1.6-.1-2.2-.1-.2 0-.5-.3-.5-.5 0-.4.3-.5 1-.5 3 0 7.3.1 7.7.1.7 0 6.1-.1 8.1-.1 4.1 0 8.7.4 12.1 2.7 1.6 1.2 4.5 4.2 4.5 8.6 0 4.7-1.9 9.2-8 14.3 5.3 6.6 9.8 12.3 13.6 16.2 3.5 3.5 5.6 4.1 7.2 4.4 1.3.2 1.9.2 2.3.2.4 0 .6.3.6.5 0 .4-.4.5-1.6.5h-4.1c-3.7 0-5.3-.4-6.9-1.3-2.8-1.5-5.2-4.5-8.9-9.2-2.7-3.4-5.6-7.5-7-9.2-.3-.3-.4-.4-.9-.4l-8.3-.1c-.3 0-.4.1-.4.5v1.5c0 6.1 0 10.9.3 13.5.2 1.8.6 3 2.6 3.3.9.1 2.3.3 2.9.3.4 0 .5.3.5.5 0 .3-.3.5-1 .5-3.5 0-7.7-.2-8-.2-.1 0-4.4.2-6.4.2-.7 0-1-.1-1-.5 0-.2.1-.5.5-.5.6 0 1.4-.1 2-.3 1.3-.3 1.4-1.5 1.7-3.3.4-2.6.4-7.5.4-13.6v-11zm5.6 5.3c0 .4.1.6.4.8 1 .5 4.3 1 7.2 1 1.6 0 3.3-.1 4.9-1.1 2.2-1.5 3.9-4.8 3.9-9.6 0-7.8-4.3-12.3-11.2-12.3-1.9 0-4 .2-4.7.4-.3.1-.5.4-.5.7v20.1z"
                style={{
                  fill: "#22394c"
                }}
                transform={`matrix(.8844 0 0 .8844 ${
                  isMobile ? -82 : -145
                } -6.545)`}
              />
              <path
                d="M364.2 123.1c.2 2.2.7 5.6 3.3 6.5 1.8.6 3.5.6 4.2.6.3 0 .5.1.5.4 0 .4-.6.6-1.3.6-1.5 0-8.7-.1-11.1-.3-1.6-.1-1.8-.4-1.8-.7 0-.2.1-.4.4-.5.4-.1.4-1 .3-2.2l-3.1-31.9h-.1l-15.7 32.1c-1.3 2.7-1.7 3.3-2.3 3.3-.6 0-1-.6-2.2-2.9-1.7-3.1-6-11.2-7.6-14.5-1.9-4-7.2-14.5-8.3-17.1h-.3l-2.5 28.4c-.1 1-.1 2.1-.1 3.2 0 1 .6 1.5 1.6 1.8 1.1.3 2.1.4 2.5.4.2 0 .5.2.5.4 0 .4-.4.6-1.2.6-2.4 0-5.5-.2-6.1-.2-.6 0-3.7.2-5.5.2-.7 0-1.1-.1-1.1-.6 0-.2.3-.4.7-.4.5 0 1-.1 1.9-.2 2.1-.4 2.2-2.7 2.5-5l4.7-41c.1-.7.4-1.1.7-1.1.4 0 1 .2 1.3 1l19.6 39 18.9-38.9c.3-.6.6-1 1-1s.8.5 1 1.7l4.7 38.3z"
                style={{
                  fill: "#22394c"
                }}
                transform={`matrix(.8844 0 0 .8844 ${
                  isMobile ? -82 : -145
                } -6.545)`}
              />
              <path
                d="M395 84.9c.8-2.1 1.1-2.4 1.5-2.4.7 0 .9.9 1.6 2.3 1.2 2.7 11.6 28.6 15.6 38.1 2.4 5.6 4.1 6.4 5.5 6.9 1 .3 1.9.4 2.6.4.4 0 .8.1.8.5s-.7.5-1.5.5c-1 0-5.8 0-10.3-.1-1.3-.1-2.3-.1-2.3-.4 0-.3.1-.3.4-.4.4-.1 1-.7.6-1.7l-5.8-14.4c-.1-.3-.2-.4-.6-.4h-15c-.3 0-.5.1-.7.5l-3.7 10c-.6 1.6-1 3.1-1 4.2 0 1.3 1.1 1.7 2.2 1.7h.6c.5 0 .7.2.7.5 0 .4-.4.5-1 .5-1.6 0-5.1-.2-5.8-.2-.7 0-3.9.2-6.6.2-.8 0-1.3-.1-1.3-.5 0-.3.3-.5.6-.5.4 0 1.4-.1 1.9-.1 3-.4 4.2-2.6 5.5-5.8L395 84.9zm7.2 26.1c.3 0 .3-.1.2-.4L396 93.4c-.4-1-.7-1-1.1 0l-6.1 17.2c-.1.3 0 .4.2.4h13.2zM433.9 122.6c.1 5.2.7 6.7 2.5 7.2 1.2.3 2.7.4 3.2.4.3 0 .5.2.5.5 0 .4-.4.5-1.2.5-3.7 0-6.3-.2-6.9-.2-.6 0-3.3.2-6.3.2-.7 0-1-.1-1-.5 0-.3.2-.5.5-.5.5 0 1.7-.1 2.7-.4 1.6-.4 1.8-2.1 1.8-7.8V86c0-2.5.4-3.2.9-3.2.7 0 1.8 1.3 2.5 1.9 1 1 10.5 11.1 20.5 21.4 6.4 6.6 13.4 14.1 15.4 16.2l-.7-31.5c-.1-4.1-.4-5.5-2.4-5.8-1.2-.2-2.7-.3-3.2-.3-.4 0-.5-.4-.5-.6 0-.4.5-.4 1.3-.4 3 0 6.1.1 6.8.1.7 0 2.9-.1 5.5-.1.7 0 1.2.1 1.2.4 0 .2-.3.6-.7.6-.3 0-.8 0-1.6.1-2.1.4-2.3 1.7-2.3 5.5l-.1 36.8c0 4.1-.1 4.5-.5 4.5-.7 0-1.3-.5-4.9-3.8-.7-.6-10-9.8-16.9-17-7.5-7.9-14.8-15.6-16.8-17.8l.7 29.6zM494 122.6c.1 5.2.7 6.7 2.5 7.2 1.2.3 2.7.4 3.2.4.3 0 .5.2.5.5 0 .4-.4.5-1.2.5-3.7 0-6.3-.2-6.9-.2-.6 0-3.3.2-6.3.2-.7 0-1-.1-1-.5 0-.3.2-.5.5-.5.5 0 1.7-.1 2.7-.4 1.6-.4 1.8-2.1 1.8-7.8V86c0-2.5.4-3.2.9-3.2.7 0 1.8 1.3 2.5 1.9 1 1 10.5 11.1 20.5 21.4 6.4 6.6 13.4 14.1 15.4 16.2l-.7-31.5c-.1-4.1-.4-5.5-2.4-5.8-1.2-.2-2.7-.3-3.2-.3-.4 0-.5-.4-.5-.6 0-.4.5-.4 1.3-.4 3 0 6.1.1 6.8.1.7 0 2.9-.1 5.5-.1.7 0 1.2.1 1.2.4 0 .2-.3.6-.7.6-.3 0-.8 0-1.5.1-2.1.4-2.3 1.7-2.3 5.5l-.1 36.8c0 4.1-.1 4.5-.5 4.5-.7 0-1.3-.5-4.9-3.8-.7-.6-10-9.8-16.9-17-7.5-7.9-14.8-15.6-16.8-17.8l.6 29.6z"
                style={{
                  fill: "#22394c"
                }}
                transform={`matrix(.8844 0 0 .8844 ${
                  isMobile ? -82 : -145
                } -6.545)`}
              />
            </g>
          </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 468.1108 141.5918"
        width={510}
        height={172}
        style={{ "--scroll-y": `${logoOpacity}` }}
      >
        <g className="gold">
          <path
            d="M38.5 184.3c-3.6-3.2-4.4-7.4-4.4-10.8 0-2.5.8-6.7 4.1-10 2.2-2.2 5.5-3.9 11.2-3.9 1.5 0 3.5.1 5.3.4 1.4.3 2.6.5 3.7.5.4 0 .5.2.5.4 0 .3-.1.7-.2 2.1-.1 1.2-.1 3.2-.1 3.8 0 .6-.1.8-.3.8-.3 0-.3-.3-.3-.8 0-1.4-.6-2.9-1.5-3.7-1.3-1.1-4.1-2.1-7.3-2.1-4.9 0-7.1 1.4-8.4 2.7-2.7 2.6-3.3 5.8-3.3 9.6 0 7 5.4 13.4 13.2 13.4 2.7 0 4.9-.3 6.4-1.8.8-.8 1.2-2.4 1.4-3.1.1-.4.1-.5.4-.5.2 0 .3.3.3.5 0 .3-.4 3.4-.8 4.7-.2.7-.3.8-1 1.1-1.5.6-4.3.8-6.6.8-5.7-.1-9.5-1.5-12.3-4.1zM66.9 173.2c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.6-1.3-1.7-.3 0-.8-.1-1.1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.5 0 3.6.1 3.7.1H76c.6 0 1.2-.1 1.5-.2.1 0 .3-.1.4-.1.1 0 .1.1.1.3 0 .2-.2.6-.3 1.5 0 .3-.1 1.7-.2 2.1 0 .1-.1.3-.3.3-.2 0-.3-.1-.3-.4 0-.2 0-.7-.2-1.1-.2-.5-.5-.7-2.3-1-.5-.1-4.3-.1-4.7-.1-.1 0-.2.1-.2.3v8.5c0 .2 0 .3.2.3.4 0 4.7 0 5.4-.1.8-.1 1.2-.1 1.6-.4.2-.2.4-.4.5-.4.1 0 .2.1.2.3 0 .2-.2.7-.3 1.7-.1.6-.1 1.8-.1 2 0 .3-.1.6-.3.6-.1 0-.2-.1-.2-.3 0-.3 0-.6-.1-1s-.4-.8-1.6-1c-.9-.1-4.3-.1-4.9-.1-.2 0-.2.1-.2.2v7.9c.1 2.1.7 2.5 3.8 2.5.8 0 2.4 0 3.2-.3.8-.4 1.3-.9 1.5-2.2.1-.4.1-.5.3-.5s.2.3.2.5-.3 2.3-.4 3c-.2.8-.6.8-1.8.8-2.4 0-4.3-.1-5.6-.1-1.4-.1-2.2-.1-2.7-.1h-1.4c-.6 0-1.4.1-1.9.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.2-1.3.2-3.7.2-6.7v-5.5zM87.1 173.2c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.6-1.3-1.7-.3 0-.8-.1-1.1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.5 0 3.6.1 3.8.1.3 0 3-.1 4-.1 2.1 0 4.3.2 6 1.4.8.6 2.2 2.1 2.2 4.2 0 2.3-1 4.6-4 7.1 2.6 3.3 4.9 6.1 6.7 8.1 1.7 1.8 2.8 2.1 3.6 2.2.6.1 1 .1 1.1.1s.3.1.3.3c0 .2-.2.3-.8.3h-2c-1.8 0-2.6-.2-3.4-.6-1.4-.7-2.6-2.2-4.4-4.6-1.4-1.7-2.8-3.7-3.5-4.5-.1-.1-.2-.2-.4-.2l-4.1-.1c-.1 0-.2.1-.2.3v.7c0 3 0 5.4.1 6.7.1.9.3 1.5 1.3 1.6.4.1 1.1.1 1.4.1.2 0 .3.1.3.3 0 .1-.1.3-.5.3-1.8 0-3.8-.1-4-.1 0 0-2.2.1-3.2.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.2-1.3.2-3.7.2-6.7v-5.6zm2.7 2.6c0 .2.1.3.2.4.5.3 2.1.5 3.6.5.8 0 1.6 0 2.4-.5 1.1-.7 1.9-2.4 1.9-4.8 0-3.9-2.1-6.1-5.6-6.1-1 0-2 .1-2.3.2-.1.1-.3.2-.3.4v9.9z"
            style={{
              fill: "#956c00"
            }}
            transform="matrix(.8844 0 0 .8844 -8.579 -131.775)"
          />
          <path
            d="M116.8 164.8c.4-1 .5-1.2.8-1.2.3 0 .4.4.8 1.1.6 1.3 5.8 14.2 7.7 18.9 1.2 2.8 2.1 3.2 2.7 3.4.5.1 1 .2 1.3.2.2 0 .4.1.4.3 0 .2-.4.3-.7.3-.5 0-2.9 0-5.1-.1-.6 0-1.1 0-1.1-.2 0-.1.1-.1.2-.2.2-.1.5-.3.3-.8l-2.9-7.1c-.1-.1-.1-.2-.3-.2h-7.4c-.1 0-.3.1-.3.3l-1.8 5c-.3.8-.5 1.5-.5 2.1 0 .6.5.8 1.1.8h.3c.3 0 .3.1.3.3 0 .2-.2.3-.5.3-.8 0-2.5-.1-2.9-.1-.3 0-1.9.1-3.3.1-.4 0-.6-.1-.6-.3 0-.1.1-.3.3-.3.2 0 .7 0 1-.1 1.5-.2 2.1-1.3 2.7-2.9l7.5-19.6zm3.6 13c.1 0 .1-.1.1-.2l-3.2-8.5c-.2-.5-.4-.5-.5 0l-3 8.5c0 .1 0 .2.1.2h6.5zM159.7 183.8c.1 1.1.3 2.8 1.6 3.2.9.3 1.8.3 2.1.3.1 0 .3.1.3.2 0 .2-.3.3-.7.3-.7 0-4.3 0-5.5-.1-.8-.1-.9-.2-.9-.3 0-.1.1-.2.2-.3.2 0 .2-.5.1-1.1l-1.5-15.8h-.1l-7.8 15.9c-.7 1.4-.8 1.6-1.1 1.6-.3 0-.5-.3-1.1-1.4-.8-1.5-3-5.5-3.8-7.2-1-2-3.6-7.2-4.1-8.5h-.1l-1.2 14.1v1.6c0 .5.3.8.8.9.6.1 1 .2 1.2.2.1 0 .3.1.3.2 0 .2-.2.3-.6.3-1.2 0-2.7-.1-3-.1-.3 0-1.8.1-2.7.1-.3 0-.5-.1-.5-.3 0-.1.1-.2.3-.2.3 0 .5 0 1-.1 1.1-.2 1.1-1.3 1.2-2.5l2.3-20.3c0-.3.2-.6.4-.6s.5.1.7.5l9.7 19.4 9.4-19.3c.1-.3.3-.5.5-.5s.4.3.5.8l2.1 19zM172.3 178.7c0 3 0 5.5.1 6.7.1.9.2 1.5 1.2 1.6.5.1 1.2.1 1.5.1.2 0 .3.1.3.3 0 .1-.1.3-.5.3-1.8 0-3.9-.1-4-.1-.2 0-2.2.1-3.2.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.1-1.3.2-3.7.2-6.7v-5.5c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.5-1-1.7-.4-.1-.8-.1-1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.1 0 3.1.1 3.3.1.1 0 2.2-.1 3.2-.1.4 0 .5.1.5.3 0 .1-.1.3-.3.3-.2 0-.4 0-.8.1-.9.2-1.1.6-1.1 1.7v12.2zM183.5 184.8c-3.2-2.7-3.9-6.3-3.9-9.2 0-2.1.8-5.7 3.6-8.5 1.9-1.9 4.9-3.3 9.8-3.3 1.3 0 3.1.1 4.7.4 1.2.2 2.2.4 3.3.5.3 0 .4.1.4.3 0 .3-.1.6-.1 1.8 0 1 0 2.7-.1 3.2 0 .5-.2.7-.4.7s-.3-.2-.3-.7c0-1.2-.5-2.5-1.4-3.1-1.1-1-3.5-1.7-6.3-1.7-4.1 0-6.1 1.1-7.3 2.2-2.4 2.2-2.9 5-2.9 8.1 0 6 4.7 11.3 11.6 11.3 2.4 0 4-.2 5.3-1.5.7-.7 1.1-2 1.2-2.6.1-.3.1-.4.3-.4.1 0 .3.2.3.4s-.4 2.9-.8 4c-.2.6-.3.7-.8.9-1.3.5-3.7.7-5.8.7-4.7-.1-7.9-1.3-10.4-3.5zM227.2 161c.4-1.2.6-1.4.8-1.4.2 0 .4.2.8 1.3.6 1.4 6.3 16.5 8.5 22.1 1.3 3.3 2.4 3.8 3.2 4.1.5.2 1.1.2 1.5.2.2 0 .4 0 .4.2s-.3.3-.7.3c-.5 0-3.2 0-5.8-.1-.7 0-1.1 0-1.1-.3 0-.1.1-.2.3-.3.2-.1.4-.4.2-1l-3.4-9c-.1-.1-.1-.2-.3-.2h-7.9c-.2 0-.3.1-.4.3l-2.2 6.5c-.3.9-.5 1.8-.5 2.5s.8 1.1 1.4 1.1h.4c.3 0 .4.1.4.2 0 .2-.2.3-.5.3-.9 0-2.5-.1-2.9-.1-.4 0-2.4.1-4.1.1-.5 0-.7-.1-.7-.3 0-.1.1-.2.3-.2.3 0 .8 0 1.1-.1 1.7-.2 2.4-1.6 3.1-3.4l8.1-22.8zm3.8 14.6c.2 0 .2-.1.1-.3l-3.5-9.9c-.2-.5-.4-.5-.5 0l-3.2 9.9c-.1.2 0 .3.1.3h7zM246.7 173.2c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.6-1.3-1.7-.3 0-.8-.1-1.1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.5 0 3.6.1 3.8.1.3 0 3-.1 4-.1 2.1 0 4.3.2 6 1.4.8.6 2.2 2.1 2.2 4.2 0 2.3-1 4.6-4 7.1 2.6 3.3 4.9 6.1 6.7 8.1 1.7 1.8 2.8 2.1 3.6 2.2.6.1 1 .1 1.1.1s.3.1.3.3c0 .2-.2.3-.8.3h-2c-1.8 0-2.6-.2-3.4-.6-1.4-.7-2.6-2.2-4.4-4.6-1.4-1.7-2.8-3.7-3.5-4.5-.1-.1-.2-.2-.4-.2l-4.1-.1c-.1 0-.2.1-.2.3v.7c0 3 0 5.4.1 6.7.1.9.3 1.5 1.3 1.6.4.1 1.1.1 1.4.1.2 0 .3.1.3.3 0 .1-.1.3-.5.3-1.8 0-3.8-.1-4-.1 0 0-2.2.1-3.2.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.2-1.3.2-3.7.2-6.7v-5.6zm2.8 2.6c0 .2.1.3.2.4.5.3 2.1.5 3.6.5.8 0 1.6 0 2.4-.5 1.1-.7 1.9-2.4 1.9-4.8 0-3.9-2.1-6.1-5.6-6.1-1 0-2 .1-2.3.2-.1.1-.3.2-.3.4v9.9zM276.7 178.7c0 3 0 5.5.1 6.7.1.9.3 1.5 1.2 1.6.4.1 1.2.1 1.5.1.2 0 .3.1.3.3 0 .1-.1.3-.5.3-1.8 0-3.8-.1-4-.1-.1 0-2.4.1-3.3.1-.4 0-.5-.1-.5-.3 0-.1.1-.2.3-.2.3 0 .7-.1 1-.1.7-.1.8-.8 1-1.7.1-1.3.1-3.7.1-6.7v-13.1l-4.7.1c-2 0-2.8.3-3.3 1-.4.5-.4.8-.5 1-.1.3-.2.3-.3.3-.1 0-.2-.1-.2-.3 0-.3.6-3.1.7-3.4 0-.2.2-.6.3-.6.2 0 .5.3 1.4.4.9.1 2.2.1 2.5.1H282c1.1 0 1.8-.1 2.3-.1.5-.1.8-.1.9-.1.1 0 .1.2.1.4 0 1-.1 3.2-.1 3.6 0 .3-.1.4-.3.4-.1 0-.2-.1-.3-.6v-.3c-.1-1-.8-1.7-3.9-1.7l-4-.1v13zM295 178.7c0 3 0 5.5.1 6.7.1.9.2 1.5 1.2 1.6.5.1 1.2.1 1.5.1.2 0 .3.1.3.3 0 .1-.1.3-.5.3-1.8 0-3.9-.1-4-.1-.2 0-2.2.1-3.2.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.1-1.3.2-3.7.2-6.7v-5.5c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.5-1-1.7-.4-.1-.8-.1-1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.1 0 3.1.1 3.3.1.1 0 2.2-.1 3.2-.1.4 0 .5.1.5.3 0 .1-.1.3-.3.3-.2 0-.4 0-.8.1-.9.2-1.1.6-1.1 1.7v12.2zM303.6 187.3c-.4-.2-.5-.3-.5-1.2 0-1.5.1-2.8.2-3.3 0-.3.1-.5.3-.5.2 0 .3.1.3.4s0 .7.1 1.1c.5 2.3 2.9 3.1 5.1 3.1 3.2 0 4.8-1.8 4.8-4.1 0-2.2-1.2-3.3-4.1-5.4l-1.5-1.1c-3.5-2.6-4.6-4.5-4.6-6.7 0-3.7 2.9-5.9 7.1-5.9 1.3 0 2.6.2 3.3.4.6.1.9.1 1.1.1.3 0 .3 0 .3.2 0 .1-.1 1.2-.1 3.3 0 .5 0 .7-.3.7-.2 0-.3-.1-.3-.4 0-.4-.3-1.2-.5-1.5-.2-.4-1.3-1.5-4.2-1.5-2.3 0-4.3 1.2-4.3 3.4 0 2 1 3.1 4.2 5.3l.9.6c3.9 2.7 5.3 4.8 5.3 7.5 0 1.8-.7 3.8-3 5.3-1.4.9-3.4 1.1-5.1 1.1-1.3 0-3.2-.3-4.5-.9zM332.5 178.7c0 3 0 5.5.1 6.7.1.9.3 1.5 1.2 1.6.4.1 1.2.1 1.5.1.2 0 .3.1.3.3 0 .1-.1.3-.5.3-1.8 0-3.8-.1-4-.1-.1 0-2.4.1-3.3.1-.4 0-.5-.1-.5-.3 0-.1.1-.2.3-.2.3 0 .7-.1 1-.1.7-.1.8-.8 1-1.7.1-1.3.1-3.7.1-6.7v-13.1l-4.7.1c-2 0-2.8.3-3.3 1-.4.5-.4.8-.5 1-.1.3-.2.3-.3.3-.1 0-.2-.1-.2-.3 0-.3.6-3.1.7-3.4 0-.2.2-.6.3-.6.2 0 .5.3 1.4.4.9.1 2.2.1 2.5.1h12.2c1.1 0 1.8-.1 2.3-.1.5-.1.8-.1.9-.1.1 0 .1.2.1.4 0 1-.1 3.2-.1 3.6 0 .3-.1.4-.3.4-.1 0-.2-.1-.3-.6v-.3c-.1-1-.8-1.7-3.9-1.7l-4-.1v13z"
            style={{
              fill: "#956c00"
            }}
            transform="matrix(.8844 0 0 .8844 -8.579 -131.775)"
          />
        </g>
        <g className="gold">
          <path
            d="M9.7 219.6c0-4.3 2.7-7.1 5.6-8.8-1.4-1.9-1.8-3.4-1.8-5.1 0-2.9 3-6.7 7.9-6.7 1.9 0 3.4.4 4.4.9.4.3.5.5.5.9 0 1.1-.1 3.7-.3 4.2-.1.6-.2.6-.4.6s-.2-.1-.2-.7c0-1-.2-2.2-1.1-3.1-.8-.8-2.1-1.6-3.7-1.6-2.2 0-4.7 1.4-4.7 4.8 0 2.9 2 5.2 5.8 9.4 1.2 1.4 5.8 5.6 6.9 6.6 1-1.4 1.9-3.8 1.9-6.1 0-.6-.1-1.2-.7-1.8-.5-.5-1.2-.6-1.8-.6-.2 0-.4-.1-.4-.3 0-.2.3-.3.6-.3.9 0 2.3 0 4.4.3.5.1.7.4.7.7 0 3-2 6.7-3.6 8.6 2.4 2.1 4 3 5.1 3.6 1.2.7 3 1.4 4.4 1.4.3 0 .5 0 .5.3 0 .1-.3.3-.6.3h-3.6c-2.7 0-3.6-.3-7.6-3.4-.8.8-3.7 4-9.2 4-6.5 0-9-4.9-9-8.1zm17.1 3.5c-2.1-1.7-5.7-5.2-6.6-6.2-1-1-3.3-3.6-4.3-5.1-1.9 1.2-3.3 3.2-3.3 6.2 0 4.6 3.2 7.9 7.3 7.9 3.4-.1 5.6-1.5 6.9-2.8zM62.5 216.6c0 3.5 0 6.4.2 8 .1 1.1.3 1.9 1.4 2 .5.1 1.3.1 1.6.1.2 0 .3.1.3.2 0 .2-.2.3-.6.3-2 0-4.3-.1-4.5-.1s-2.5.1-3.6.1c-.4 0-.6-.1-.6-.3 0-.1.1-.2.3-.2.3 0 .8-.1 1.1-.1.7-.1.9-1 1.1-2 .2-1.5.2-4.4.2-8v-15.5l-5.4.1c-2.3 0-3.2.3-3.7 1.2-.4.6-.5.9-.6 1.1-.1.3-.2.4-.4.4-.1 0-.2-.1-.2-.3 0-.4.7-3.5.8-3.8.1-.2.2-.7.4-.7.3 0 .6.4 1.6.4 1.1.1 2.5.2 2.9.2h13.7c1.2 0 2-.1 2.6-.2.5-.1.9-.2 1-.2.2 0 .2.2.2.4 0 1.1-.1 3.6-.1 4 0 .3-.1.5-.3.5-.2 0-.3-.1-.3-.6v-.4c-.1-1.1-1-1.9-4.5-2l-4.6-.1v15.5zM81.4 218.2c0 3 0 5.5.1 6.7.1.9.2 1.5 1.2 1.6.5.1 1.2.1 1.5.1.2 0 .3.1.3.3 0 .1-.1.3-.5.3-1.8 0-3.9-.1-4-.1-.2 0-2.2.1-3.2.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.1-1.3.2-3.7.2-6.7v-5.5c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.5-1-1.7-.4-.1-.8-.1-1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.1 0 3.1.1 3.3.1.1 0 2.2-.1 3.2-.1.4 0 .5.1.5.3 0 .1-.1.3-.3.3-.2 0-.4 0-.8.1-.9.2-1.1.6-1.1 1.7v12.2zM95 218.3c0 4.6.1 6.4.7 7 .5.5 1.8.7 4.3.7 1.7 0 3.1 0 3.9-1 .4-.5.7-1.1.8-1.8 0-.2.1-.4.3-.4.1 0 .2.1.2.5 0 .3-.2 2.2-.5 3.1-.2.7-.3.8-2.1.8-2.3 0-4.1 0-5.6-.1-1.5 0-2.6-.1-3.5-.1h-1.3c-.7 0-1.4.1-1.9.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.2-1.3.2-3.7.2-6.7v-5.5c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.6-1.3-1.7-.3 0-.8-.1-1.1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.5 0 3.5.1 3.7.1.1 0 2.6-.1 3.6-.1.3 0 .5.1.5.3 0 .1-.1.2-.3.2-.2 0-.7 0-1.1.1-1 .2-1.1.7-1.2 1.8v12.4zM111.7 212.7c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.6-1.3-1.7-.3 0-.8-.1-1.1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.5 0 3.6.1 3.7.1h7.7c.6 0 1.2-.1 1.5-.2.1 0 .3-.1.4-.1.1 0 .1.1.1.3 0 .2-.2.6-.3 1.5 0 .3-.1 1.7-.2 2 0 .1-.1.3-.3.3-.2 0-.3-.1-.3-.4 0-.2 0-.7-.2-1.1-.2-.5-.5-.7-2.3-1-.5-.1-4.3-.1-4.7-.1-.1 0-.2.1-.2.3v8.5c0 .2 0 .3.2.3.4 0 4.7 0 5.4-.1.8-.1 1.2-.1 1.6-.4.2-.2.4-.4.5-.4.1 0 .2.1.2.3 0 .2-.2.7-.3 1.7-.1.6-.1 1.8-.1 2 0 .3-.1.6-.3.6-.1 0-.2-.1-.2-.3 0-.3 0-.6-.1-1s-.4-.8-1.6-1c-.9-.1-4.3-.1-4.9-.1-.2 0-.2.1-.2.2v7.9c.1 2.1.7 2.5 3.8 2.5.8 0 2.4 0 3.2-.3.8-.4 1.3-.9 1.5-2.2.1-.4.1-.5.3-.5.2 0 .2.3.2.5s-.3 2.3-.4 3c-.2.8-.5.8-1.8.8-2.4 0-4.3-.1-5.6-.1-1.4-.1-2.2-.1-2.7-.1h-1.4c-.6 0-1.4.1-1.9.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.2-1.3.2-3.7.2-6.7v-5.4zM144.6 210.2c0-5.7 0-6.7-.1-7.9-.1-1.2-.4-1.8-1.6-2.1-.3-.1-.9-.1-1.2-.1-.1 0-.3-.1-.3-.2 0-.2.2-.3.6-.3 1.6 0 4 .1 4.1.1.4 0 2.7-.1 4.9-.1 3.6 0 10.3-.3 14.7 4.2 1.8 1.9 3.6 4.9 3.6 9.3 0 4.6-1.9 8.2-4 10.3-1.6 1.7-4.9 4.2-11.1 4.2-1.6 0-3.5-.1-5.1-.2-1.6-.1-2.9-.2-3-.2h-1.5c-.7 0-1.6.1-2.1.1-.4 0-.6-.1-.6-.3 0-.1.1-.2.3-.2.3 0 .8-.1 1.1-.1.7-.1.9-1 1.1-2 .2-1.5.2-4.4.2-8v-6.5zm3.1 3.9c0 3.9 0 7.3.1 8 0 .9.1 2.4.4 2.8.5.7 1.9 1.5 6.2 1.5 3.4 0 6.6-1.2 8.7-3.4 1.9-1.9 2.9-5.4 2.9-8.8 0-4.7-2-7.7-3.5-9.2-3.4-3.6-7.6-4.1-12-4.1-.7 0-2.1.1-2.4.3-.3.1-.4.3-.4.7v12.2zM177 212.7c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.6-1.3-1.7-.3 0-.8-.1-1.1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.5 0 3.6.1 3.7.1h7.7c.6 0 1.2-.1 1.5-.2.1 0 .3-.1.4-.1.1 0 .1.1.1.3 0 .2-.2.6-.3 1.5 0 .3-.1 1.7-.2 2 0 .1-.1.3-.3.3-.2 0-.3-.1-.3-.4 0-.2 0-.7-.2-1.1-.2-.5-.5-.7-2.3-1-.5-.1-4.3-.1-4.7-.1-.1 0-.2.1-.2.3v8.5c0 .2 0 .3.2.3.4 0 4.7 0 5.4-.1.8-.1 1.2-.1 1.6-.4.2-.2.4-.4.5-.4.1 0 .2.1.2.3 0 .2-.2.7-.3 1.7-.1.6-.1 1.8-.1 2 0 .3-.1.6-.3.6-.1 0-.2-.1-.2-.3 0-.3 0-.6-.1-1s-.4-.8-1.6-1c-.9-.1-4.3-.1-4.9-.1-.2 0-.2.1-.2.2v7.9c.1 2.1.7 2.5 3.8 2.5.8 0 2.4 0 3.2-.3.8-.4 1.3-.9 1.5-2.2.1-.4.1-.5.3-.5.2 0 .2.3.2.5s-.3 2.3-.4 3c-.2.8-.6.8-1.8.8-2.4 0-4.3-.1-5.6-.1-1.4-.1-2.2-.1-2.7-.1h-1.4c-.6 0-1.4.1-1.9.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.2-1.3.2-3.7.2-6.7v-5.4zM194.5 226.8c-.4-.2-.5-.3-.5-1.2 0-1.5.1-2.8.2-3.3 0-.3.1-.5.3-.5.2 0 .3.1.3.4s0 .7.1 1.1c.5 2.3 2.9 3.1 5.1 3.1 3.2 0 4.8-1.8 4.8-4.1 0-2.2-1.2-3.3-4.1-5.4l-1.5-1.1c-3.5-2.6-4.6-4.5-4.6-6.7 0-3.7 2.9-5.9 7.1-5.9 1.3 0 2.6.2 3.3.4.6.1.9.1 1.1.1.3 0 .3 0 .3.2 0 .1-.1 1.2-.1 3.3 0 .5 0 .7-.3.7-.2 0-.3-.1-.3-.4 0-.4-.3-1.2-.5-1.5-.2-.4-1.3-1.5-4.2-1.5-2.3 0-4.3 1.2-4.3 3.4 0 2 1 3.1 4.2 5.3l.9.6c3.9 2.7 5.3 4.8 5.3 7.5 0 1.8-.7 3.8-3 5.3-1.4.9-3.4 1.1-5.1 1.1-1.3-.1-3.2-.3-4.5-.9zM218.6 218.2c0 3 0 5.5.1 6.7.1.9.2 1.5 1.2 1.6.5.1 1.2.1 1.5.1.2 0 .3.1.3.3 0 .1-.1.3-.5.3-1.8 0-3.9-.1-4-.1-.2 0-2.2.1-3.2.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.1-1.3.2-3.7.2-6.7v-5.5c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.5-1-1.7-.4-.1-.8-.1-1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.1 0 3.1.1 3.3.1.1 0 2.2-.1 3.2-.1.4 0 .5.1.5.3 0 .1-.1.3-.3.3-.2 0-.4 0-.8.1-.9.2-1.1.6-1.1 1.7v12.2zM244.7 219.3c0-2.5-.1-2.9-1.4-3.1-.3 0-.8-.1-1.1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.5 0 3.6.1 3.8.1.1 0 2.2-.1 3.2-.1.4 0 .5 0 .5.3 0 .1-.1.3-.3.3-.2 0-.4 0-.8.1-.9.1-1.1.6-1.2 1.7v6.7c0 1.4 0 1.5-.4 1.7-2.1 1.1-5 1.4-6.9 1.4-2.5 0-7-.3-10.6-3.3-2-1.7-3.8-5-3.8-8.9 0-5 2.5-8.5 5.4-10.2 2.9-1.8 6.1-2 8.6-2 2.1 0 4.3.4 4.9.5.7.1 1.8.3 2.6.3.3 0 .4.1.4.3 0 .4-.2 1.3-.2 4.4 0 .5-.1.7-.4.7-.2 0-.2-.2-.2-.5 0-.4-.2-1.3-.7-2.1-.8-1.2-3.3-2.4-7.4-2.4-1.9 0-4.3.1-6.7 2-1.9 1.4-3.2 4.2-3.2 7.8 0 4.4 2.3 7.6 3.4 8.6 2.6 2.4 5.3 3.3 8.2 3.3 1.1 0 2.6-.1 3.5-.6.4-.2.7-.4.7-1v-5.3zM258.7 223c.1 2.6.4 3.3 1.2 3.6.6.1 1.3.2 1.6.2.1 0 .3.1.3.3 0 .2-.2.3-.6.3-1.8 0-3.1-.1-3.4-.1-.3 0-1.6.1-3.1.1-.3 0-.5 0-.5-.3 0-.1.1-.3.3-.3.3 0 .8 0 1.3-.2.8-.2.9-1.1.9-3.9v-17.8c0-1.2.2-1.6.4-1.6.4 0 .9.6 1.2 1 .5.5 5.2 5.5 10.2 10.6 3.2 3.3 6.6 7 7.6 8l-.3-15.6c0-2-.2-2.7-1.2-2.9-.6-.1-1.3-.1-1.6-.1-.2 0-.3-.2-.3-.3 0-.2.3-.2.6-.2 1.5 0 3 .1 3.4.1.4 0 1.4-.1 2.7-.1.3 0 .6 0 .6.2 0 .1-.1.3-.4.3-.1 0-.4 0-.8.1-1.1.2-1.1.8-1.1 2.7l-.1 18.3c0 2.1 0 2.2-.3 2.2s-.7-.3-2.5-1.9c-.3-.3-5-4.9-8.4-8.4-3.7-3.9-7.4-7.7-8.4-8.8l.7 14.5zM287.1 212.7c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.6-1.3-1.7-.3 0-.8-.1-1.1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.5 0 3.6.1 3.7.1h7.7c.6 0 1.2-.1 1.5-.2.1 0 .3-.1.4-.1.1 0 .1.1.1.3 0 .2-.2.6-.3 1.5 0 .3-.1 1.7-.2 2 0 .1-.1.3-.3.3-.2 0-.3-.1-.3-.4 0-.2 0-.7-.2-1.1-.2-.5-.6-.7-2.3-1-.5-.1-4.3-.1-4.7-.1-.1 0-.2.1-.2.3v8.5c0 .2 0 .3.2.3.4 0 4.7 0 5.4-.1.8-.1 1.2-.1 1.6-.4.2-.2.4-.4.5-.4.1 0 .2.1.2.3 0 .2-.2.7-.3 1.7-.1.6-.1 1.8-.1 2 0 .3-.1.6-.3.6-.1 0-.2-.1-.2-.3 0-.3 0-.6-.1-1s-.4-.8-1.6-1c-.9-.1-4.3-.1-4.9-.1-.2 0-.2.1-.2.2v7.9c.1 2.1.7 2.5 3.8 2.5.8 0 2.4 0 3.2-.3.8-.4 1.3-.9 1.5-2.2.1-.4.1-.5.3-.5.2 0 .2.3.2.5s-.3 2.3-.4 3c-.2.8-.6.8-1.8.8-2.4 0-4.3-.1-5.6-.1-1.4-.1-2.2-.1-2.7-.1H287c-.6 0-1.4.1-1.9.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.2-1.3.2-3.7.2-6.7v-5.4zM307.3 212.7c0-4.8 0-5.7-.1-6.7-.1-1.1-.3-1.6-1.3-1.7-.3 0-.8-.1-1.1-.1-.1 0-.3-.1-.3-.3 0-.2.1-.3.5-.3 1.5 0 3.6.1 3.8.1.3 0 3-.1 4-.1 2.1 0 4.3.2 6 1.4.8.6 2.2 2.1 2.2 4.2 0 2.3-1 4.6-4 7.1 2.6 3.3 4.9 6.1 6.7 8.1 1.7 1.8 2.8 2.1 3.6 2.2.6.1 1 .1 1.1.1.2 0 .3.1.3.3 0 .2-.2.3-.8.3h-2c-1.8 0-2.6-.2-3.4-.6-1.4-.7-2.6-2.2-4.4-4.6-1.4-1.7-2.8-3.7-3.5-4.5-.1-.1-.2-.2-.4-.2l-4.1-.1c-.1 0-.2.1-.2.3v.7c0 3 0 5.4.1 6.7.1.9.3 1.5 1.3 1.6.4.1 1.1.1 1.4.1.2 0 .3.1.3.3 0 .1-.1.3-.5.3-1.8 0-3.8-.1-4-.1 0 0-2.2.1-3.2.1-.3 0-.5-.1-.5-.3 0-.1.1-.3.3-.3.3 0 .7-.1 1-.1.6-.1.7-.7.8-1.6.2-1.3.2-3.7.2-6.7v-5.6zm2.8 2.6c0 .2.1.3.2.4.5.3 2.1.5 3.6.5.8 0 1.7 0 2.4-.5 1.1-.7 1.9-2.4 1.9-4.8 0-3.9-2.1-6.1-5.6-6.1-1 0-2 .1-2.3.2-.1.1-.3.2-.3.4v9.9z"
            style={{
              fill: "#956c00"
            }}
            transform="matrix(.8844 0 0 .8844 -8.579 -131.775)"
          />
        </g>
        <g>
          <path
            d="M538.9 210.5c0 53.5-69.7 81.4-135 81.4-33.1 0-62.4-4-90.9-9.6-32.4 17.4-85.2 26.8-126.7 26.8-37.6 0-89.7-4.5-89.7-29.4 0-21.6 39.2-26.5 69.7-26 45.5.9 96.7 14.1 150.9 23 14.6-9.1 24-21.1 24-33.8 0-9.1-5.2-14.8-9.6-15.7-1.4-.3-2.6 0-2.6-.5 0-.7.9-.9 2.8-.7 5.2.5 11.3 7 11.3 16.9 0 12.7-9.1 24.9-23.3 34.3 27 4.4 54.7 7.5 82.9 7.5 68.1 0 134-21.8 134-74.2 0-38.3-39.2-59.1-81.9-59.1-40.1 0-86.1 15.3-86.1 49.7 0 25.3 28.6 36.1 53.5 36.1 23.9 0 56.8-6.3 56.8-29.1 0-8.2-5.9-14.5-10.8-16.2-5.6-1.9-8-.7-8-1.6 0-.9 4.2-1.2 8.4.2 5.9 1.9 12.4 8.2 12.4 17.4 0 24.7-31.9 36.2-58.4 35.9-27.4-.5-55.9-15.7-55.9-42.7 0-35.4 46.9-52.1 88.7-52.1 42.9 0 83.6 21.4 83.6 61.3v.2zM186.8 307c40.1 0 91.3-8.7 123.2-25.1-52.4-10.4-99.8-25.3-143.7-26.3-30.1-.7-67.9 4.4-67.9 24 0 24 51.6 27.4 88.3 27.4h.1z"
            className="gold"
            style={{
              fill: "#956c00"
            }}
            transform="matrix(.8844 0 0 .8844 -8.579 -131.775)"
          />
        </g>
      </svg>
    </div>
  );
};
