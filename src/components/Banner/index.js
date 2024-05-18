import styles from "./banner.module.scss";

export const Banner = ({ children }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_inner}>{children}</div>
    </div>
  );
};
