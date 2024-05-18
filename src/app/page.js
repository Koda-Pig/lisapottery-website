import styles from "../styles/page.module.scss";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Introduction } from "@/components/Introduction";

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

      <Introduction />

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

      <div className={styles.video}>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/U3aLoZBXdYY?si=ADUv_LfLKOiAKa84"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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

      <div className={styles.contact}>
        <h2>Contact me</h2>
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
      </div>
    </main>
  );
}
