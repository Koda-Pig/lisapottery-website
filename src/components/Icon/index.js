import React from "react";
import styles from "./styles.module.scss";

export const Icon = (props) => {
  const { iconName } = props;

  const iconClass = `${styles.icon} ${styles["icon--" + iconName]}`;

  return <i className={iconClass} aria-hidden={true} />;
};
