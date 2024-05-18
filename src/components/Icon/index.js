import React from "react";
import styles from "./styles.module.scss";

export const Icon = (props) => {
  const { iconName, size } = props;

  const iconClass = `${styles.icon} ${styles["icon--" + iconName]} ${
    size && styles["icon--" + size]
  }`;

  return <i className={iconClass} aria-hidden={true} />;
};
