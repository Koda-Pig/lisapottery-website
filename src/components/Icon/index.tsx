import React from "react";
import styles from "./styles.module.scss";

interface IconProps {
  iconName: string;
}

export const Icon: React.FC<IconProps> = ({ iconName }): JSX.Element => {
  const iconClass = `${styles.icon} ${styles["icon--" + iconName]}`;

  return <i className={iconClass} aria-hidden={true} />;
};
