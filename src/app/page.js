import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div class={styles.logo}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Lisa Pottery logo"
          width={300}
          height={171}
          priority
        />
      </div>
      <div className={styles.description}>
        <p>Website undergoing maintenance.</p>
      </div>
    </main>
  );
}
