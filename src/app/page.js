import styles from "../styles/page.module.scss";
import Image from "next/image";
import { Expandable } from "@/components/Expandable";
import { Icon } from "@/components/Icon";
import { Collection } from "@/components/Collection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
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
            src="/images/gallery/vase-1.jpg"
            alt="Yellow vase"
            width={1024}
            height={479}
            priority
          />
        </section>

        <section className={styles.text_section} id="introduction">
          <h1>
            I am a narrative Potter. I choose the vessel to tell my story.
          </h1>
          <p>
            The quality of the vessel tells a story that is never all seen from
            one perspective. There is always something around the corner, some
            element of...
          </p>
          <Expandable
            title="Read more"
            label="read-more-introduction"
            content={
              <p>
                surprise hidden in the design. The experience of it is
                immersive. You can turn it around, look inside, fill it up and
                empty it again. A vessel expresses time in a different way to
                our usual linear calendars. It turns around like our earth and
                we are reminded of the cyclical nature of seasons and of time.
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
          />
          <Image
            src="/images/gallery/vase-7.jpg"
            alt="Green vase"
            width={2304}
            height={1728}
            className={styles.image_second}
          />
        </section>

        <section className={styles.text_section} id="text-section">
          <p>
            It is my aim to capture specific moments in time by drawing on the
            archetypal myths that accompany various changes in the sky. My
            art...
          </p>
          <Expandable
            title="Read more"
            label="read-more-goals"
            content={
              <p>
                is all related to personal responses and traditional
                astrological meanings for fleeting moments in time.
              </p>
            }
          />
        </section>

        <section className={styles.collection} id="collection">
          <h2>Collection</h2>
          <Collection />
        </section>

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

        <section className={`${styles.about} ${styles.text_section}`}>
          <h2>About</h2>
          <p>
            My mother taught me to draw in the sand with a stick. As a little
            girl I fell in love with the mark making process and have used it
            for everything...
          </p>
          <Expandable
            title="Read more"
            label="read-more-about"
            content={
              <p>
                I have achieved in life. Everything begins with a pencil Clay is
                second nature to me. I have devoted myself wholeheartedly to its
                service. The work of a Potter is very close to my heart and I
                have drawn numerous parallels between humans and pots. Both are
                vessels, are made from a point of center, fashioned from the
                inside out, endure vulnerability when opening up and finally,
                must go through the fire to be transformed Clay is second nature
                to me. I have devoted myself wholeheartedly to its service. The
                work of a Potter is very close to my heart and I have drawn
                numerous parallels between humans and pots. Both are vessels,
                are made from a point of center, fashioned from the inside out,
                endure vulnerability when opening up and finally, must go
                through the fire to be transformed.. . . Read More
              </p>
            }
          />

          <div className={styles.image_trio}>
            <div className={`${styles.image} ${styles.image1}`}>
              <Image
                src="/images/family/Mary.jpg"
                alt="Mary Liebermann"
                width={1481}
                height={1499}
              />
            </div>
            <div className={`${styles.image} ${styles.image2}`}>
              <Image
                src="/images/family/Sammy.jpg"
                alt="Sammy Liebermann"
                width={1782}
                height={2960}
              />
            </div>
            <div className={`${styles.image} ${styles.image3}`}>
              <Image
                src="/images/family/Lisa.jpg"
                alt="Lisa Liebermann"
                width={1649}
                height={1306}
              />
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <h2>Contact</h2>
          <div className={styles.contact_socials}>
            <div>
              <a
                href="mailto:lisa.lieb.tile@gmail.com"
                title="Lisa Liebermann's email"
              >
                <Icon iconName={"email"} />
                <h3>lisa.lieb.tile@gmail.com</h3>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/lisa.lieb.metaphysical.potter/"
                title="Lisa Liebermann's Instagram page"
              >
                <Icon iconName={"instagram"} />
                <h3>Instagram</h3>
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/@potcast..."
                title="Lisa Liebermann's Potcast Youtube page"
              >
                <Icon iconName={"youtube"} />
                <h3>Youtube</h3>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
