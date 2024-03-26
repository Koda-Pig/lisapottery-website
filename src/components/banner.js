import styles from "../styles/banner.module.scss";

export default function Banner({ children }) {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_inner}>{children}</div>
    </div>
  );
}
