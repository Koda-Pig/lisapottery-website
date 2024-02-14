import styles from "../styles/page.module.scss";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

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
        <p>
          My mother taught me to draw in the sand with a stick. As a little girl
          I fell in love with the mark making process and have used it for
          everything I have achieved in life. Everything begins with a pencil.
        </p>
        <p>
          I am a narrative Potter. I choose the vessel to tell my story. The
          quality of the vessel tells a story that is never all seen from one
          perspective. There is always something around the corner, some element
          of surprise hidden in the design. The experience of it is immersive.
          You can turn it around, look inside, fill it up and empty it again. A
          vessel expresses time in a different way to our usual linear
          calendars. It turns around like our earth and we are reminded of the
          cyclical nature of seasons and of time.
        </p>
        <p>
          It is my aim to capture specific moments in time by drawing on the
          archetypal myths that accompany various changes in the sky. My art is
          all related to personal responses and traditional astrological
          meanings for fleeting moments in time. Clay is second nature to me. I
          have devoted myself wholeheartedly to its service. The work of a
          Potter is very close to my heart and I have drawn numerous parallels
          between humans and pots. Both are vessels, are made from a point of
          center, fashioned from the inside out, endure vulnerability when
          opening up and finally, must go through the fire to be transformed.
        </p>
      </div>

      <div className={styles.gallery}>
        <Image
          src="/yellow-pot-1.jpeg"
          alt="Yellow vase"
          width={1024}
          height={1280}
          priority
        />
        <Image
          src="/yellow-pot-2.jpeg"
          alt="Yellow vase"
          width={1024}
          height={1280}
          priority
        />
      </div>

      <div className={styles.contact}>
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
    </main>
  );
}
