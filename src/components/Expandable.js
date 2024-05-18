"use client";
import { useState, useId } from "react";
import styles from "../styles/expandable.module.scss";
import { Icon } from "@/components/Icon";

export const Expandable = ({ title, label, content, icon }) => {
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
        {icon && <Icon iconName={"chevron-down"} />}
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
