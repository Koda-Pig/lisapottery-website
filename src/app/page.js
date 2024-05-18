import styles from "../styles/page.module.scss";
import Image from "next/image";
import { Introduction } from "@/components/Introduction";
import { Expandable } from "@/components/Expandable";
import { Icon } from "@/components/Icon";
import { Collection } from "@/components/Collection";

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

      <div className={styles.featured__image}>
        <Image
          src="/images/gallery/vase-1.png"
          alt="Yellow vase"
          width={1024}
          height={479}
          priority
        />
      </div>

      <Introduction />

      <section className={styles.video}>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/U3aLoZBXdYY?si=ADUv_LfLKOiAKa84"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>

      <h2>Collection</h2>

      <Collection />

      <section className={styles.history}>
        <Expandable
          title={<h2>History</h2>}
          label="history"
          icon={true}
          centered={true}
          content={<div>Hi mom</div>}
        />
      </section>

      <div className={styles.contact}>
        <Expandable
          title={<h2>Contact</h2>}
          label="contact"
          icon={true}
          centered={true}
          content={
            <div className={styles.contact__socials}>
              <a
                href="https://www.youtube.com/@potcast..."
                title="Lisa Liebermann's Potcast Youtube page"
              >
                <Icon iconName={"youtube"} />
                <h3>Youtube</h3>
              </a>
              <a
                href="https://www.instagram.com/lisa.lieb.metaphysical.potter/"
                title="Lisa Liebermann's Instagram page"
              >
                <Icon iconName={"instagram"} />
                <h3>Instagram</h3>
              </a>
            </div>
          }
        />
      </div>
    </main>
  );
}
