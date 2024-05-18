import styles from "../styles/page.module.scss";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Introduction } from "@/components/Introduction";
import { Expandable } from "@/components/Expandable";

export default function Home() {
  // console.log(Icon);

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

      <h2>Gallery</h2>

      <div className={styles.gallery}>
        <Image
          src="/gallery/yellow-pot-1.jpeg"
          alt="Yellow vase"
          width={1024}
          height={1280}
          priority
        />
        <Image
          src="/gallery/yellow-pot-2.jpeg"
          alt="Yellow vase"
          width={1024}
          height={1280}
          priority
        />
      </div>

      <section className={styles.history}>
        <Expandable
          icon={true}
          title={<h2>History</h2>}
          content={<div>Hi mom</div>}
        />
      </section>

      <div className={styles.contact}>
        <Expandable
          icon={true}
          title={<h2>Contact</h2>}
          content={
            <div className={styles.contact_socials}>
              <a
                href="https://www.facebook.com/lisa.liebermannkoter/"
                title="Lisa Liebermann's Facebook page"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/lisa.lieb.metaphysical.potter/"
                title="Lisa Liebermann's Instagram page"
              >
                <FaInstagram />
              </a>
            </div>
          }
        />
      </div>

      <div className={styles.wix_site}>
        <h2>See some of my older work here:</h2>
        <a
          href="https://lisaliebermann.wixsite.com/pottery"
          title="Lisa Liebermann's old website"
        >
          Lisa Liebermann&apos;s old website
        </a>
      </div>
    </main>
  );
}
