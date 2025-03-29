"use client";
import { useState, useId, useEffect, useRef } from "react";
import styles from "./truncatedText.module.scss";
import { Icon } from "@/components/Icon";

interface TruncatedTextProps {
  text: string;
  maxWords?: number;
  icon?: boolean;
  animationSpeed?: number; // milliseconds per word
}

export const TruncatedText = ({
  text,
  maxWords = 31,
  icon = false,
  animationSpeed = 10 // default animation speed
}: TruncatedTextProps) => {
  const [displayedWords, setDisplayedWords] = useState(maxWords);
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const textArray = text.split(" ");
  const id = useId();

  const handleClick = () => {
    if (!animating) {
      setOpen(!open);
      setAnimating(true);
    }
  };

  useEffect(() => {
    if (!animating) return;

    const targetWords = open ? textArray.length : maxWords;
    const direction = open ? 1 : -1;

    if (
      (direction > 0 && displayedWords >= targetWords) ||
      (direction < 0 && displayedWords <= targetWords)
    ) {
      setAnimating(false);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedWords((prev) => prev + direction);
    }, animationSpeed);

    return () => clearTimeout(timer);
  }, [
    animating,
    open,
    displayedWords,
    textArray.length,
    maxWords,
    animationSpeed
  ]);

  if (textArray.length <= maxWords) {
    return <p>{text}</p>;
  }

  return (
    <div className={styles.expandable}>
      <section
        className={`${styles.wrapper} ${open ? styles.open : ""}`}
        aria-labelledby={id}
        aria-hidden={!open}
      >
        {textArray.slice(0, displayedWords).join(" ")}
        {!open && <>...</>}
      </section>
      <button
        type="button"
        className={`link ${styles.button} ${open ? styles.open : ""}`}
        onClick={handleClick}
        aria-controls={id}
        aria-expanded={open}
      >
        {open ? "Read less" : "Read more"}
        {icon && <Icon iconName={"chevron-down"} />}
      </button>
    </div>
  );
};
