"use client";
import { useState, useId } from "react";
import styles from "../styles/expandable.module.scss";

export const Expandable = ({ title, label, content }) => {
  const [open, setOpen] = useState(false);
  const id = `${label}-${useId()}`;

  return (
    <div className={styles.expandable}>
      <button
        type="button"
        className={`${styles.button} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
        aria-controls={id}
        aria-expanded={open}
      >
        {title}
      </button>
      <section
        className={`${styles.wrapper} ${open ? styles.open : ""}`}
        aria-labelledby={id}
        aria-hidden={!open}
      >
        {content}
      </section>
    </div>
  );
};
