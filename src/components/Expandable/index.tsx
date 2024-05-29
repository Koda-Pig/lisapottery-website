"use client";
import { useState, useId, ReactNode } from "react";
import styles from "./expandable.module.scss";
import { Icon } from "@/components/Icon";

interface ExpandableProps {
  label: string;
  content: ReactNode;
  icon?: boolean;
  centered?: boolean;
}

export const Expandable = ({
  label,
  content,
  icon = false,
  centered = false
}: ExpandableProps) => {
  const [open, setOpen] = useState(false);
  const id = `${label}-${useId()}`;

  return (
    <div className={styles.expandable}>
      <button
        type="button"
        className={`link ${styles.button} ${open ? styles.open : ""} ${
          centered ? styles.centered : ""
        }`}
        onClick={() => setOpen(!open)}
        aria-controls={id}
        aria-expanded={open}
      >
        {open ? "Read less" : "Read more"}
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
