import styles from "../styles/page.module.scss";
import Image from "next/image";
import { Expandable } from "@/components/Expandable";
import { Icon } from "@/components/Icon";
import { Collection } from "@/components/Collection";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="Lisa Pottery logo"
          width={300}
          height={171}
          priority
        />
      </section>

      <section className={styles.featured_image}>
        <Image
          src="/images/gallery/vase-1.png"
          alt="Yellow vase"
          width={1024}
          height={479}
          priority
        />
      </section>

      <section className={styles.text_section} id="introduction">
        <h1>I am a narrative Potter. I choose the vessel to tell my story.</h1>
        <p>
          The quality of the vessel tells a story that is never all seen from
          one perspective. There is always something around the corner, some
          element of...
        </p>
        <Expandable
          title="Read more"
          label="read-more"
          content={
            <p>
              surprise hidden in the design. The experience of it is immersive.
              You can turn it around, look inside, fill it up and empty it
              again. A vessel expresses time in a different way to our usual
              linear calendars. It turns around like our earth and we are
              reminded of the cyclical nature of seasons and of time.
            </p>
          }
        />
      </section>

      <section className={styles.image_pair} id="image-pair">
        <Image
          src="/images/gallery/vase-7.jpg"
          alt="Blue vase"
          width={2304}
          height={1728}
          className={styles.image_first}
          priority
        />
        <Image
          src="/images/gallery/vase-7.jpg"
          alt="Green vase"
          width={2304}
          height={1728}
          className={styles.image_second}
          priority
        />
      </section>

      <section className={styles.text_section} id="text-section">
        <p>
          It is my aim to capture specific moments in time by drawing on the
          archetypal myths that accompany various changes in the sky. My art...
        </p>
        <Expandable
          title="Read more"
          label="read-more"
          content={
            <p>
              is all related to personal responses and traditional astrological
              meanings for fleeting moments in time.
            </p>
          }
        />
      </section>

      <h2 id="collection">Collection</h2>
      <Collection />

      <section className={styles.cta} id="cta">
        <a className={styles.cta_button} href="#contact">
          Contact
        </a>
      </section>

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

      <section className={styles.history}>
        <Expandable
          title={<h2>History</h2>}
          label="history"
          icon={true}
          centered={true}
          content={<div>Hi mom</div>}
        />
      </section>

      <section className={styles.contact} id="contact">
        <Expandable
          title={<h2>Contact</h2>}
          label="contact"
          icon={true}
          centered={true}
          content={
            <div className={styles.contact_socials}>
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
      </section>
    </main>
  );
}
