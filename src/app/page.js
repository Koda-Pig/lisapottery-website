"use client";
import styles from "../styles/page.module.scss";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Banner from "@/components/banner";
import { useState, useEffect } from "react";

export default function Home() {
  const countDownDate = new Date("June 1, 2024 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date().getTime();
    return countDownDate - now;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setTimeLeft(distance);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <>
      <Banner>
        New website coming soon!
        <br />
        <div className={styles.countdown}>
          <span>{days}</span>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
          <span className={styles.label}>days</span>
          <span className={styles.label}>hours</span>
          <span className={styles.label}>minutes</span>
          <span className={styles.label}>seconds</span>
        </div>
      </Banner>
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
          <h1>About Lisa Liebermann</h1>
          <p>
            My mother taught me to draw in the sand with a stick. As a little
            girl I fell in love with the mark making process and have used it
            for everything I have achieved in life. Everything begins with a
            pencil.
          </p>
          <p>
            I am a narrative Potter. I choose the vessel to tell my story. The
            quality of the vessel tells a story that is never all seen from one
            perspective. There is always something around the corner, some
            element of surprise hidden in the design. The experience of it is
            immersive. You can turn it around, look inside, fill it up and empty
            it again. A vessel expresses time in a different way to our usual
            linear calendars. It turns around like our earth and we are reminded
            of the cyclical nature of seasons and of time.
          </p>
          <p>
            It is my aim to capture specific moments in time by drawing on the
            archetypal myths that accompany various changes in the sky. My art
            is all related to personal responses and traditional astrological
            meanings for fleeting moments in time. Clay is second nature to me.
            I have devoted myself wholeheartedly to its service. The work of a
            Potter is very close to my heart and I have drawn numerous parallels
            between humans and pots. Both are vessels, are made from a point of
            center, fashioned from the inside out, endure vulnerability when
            opening up and finally, must go through the fire to be transformed.
          </p>
        </div>

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
    </>
  );
}
