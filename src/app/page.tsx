"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import { useEffect, useRef, MutableRefObject } from "react";
import { Introduction } from "@/components/Introduction";
import { Expandable } from "@/components/Expandable";
import { Icon } from "@/components/Icon";
import { Collection } from "@/components/Collection";
import { Header, HeaderLogoStatic } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProvider } from "@/components/ScrollContext";

// For section slide-up animation
const useIntersectionObserver = (
  elements: MutableRefObject<HTMLElement | null>[],
  callback: (target: HTMLElement) => void
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target as HTMLElement);
          }
        });
      },
      { threshold: 0.001 }
    );

    elements.forEach((element) => {
      if (element.current) {
        observer.observe(element.current);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element.current) {
          observer.unobserve(element.current);
        }
      });
    };
  }, [elements, callback]);
};

export default function Home(): JSX.Element {
  const collectionRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const refs = [collectionRef, ctaRef, videoRef, aboutRef, contactRef];

  useIntersectionObserver(refs, (element) => {
    element.classList.add(styles.show);
  });

  return (
    <ScrollProvider>
      <div className="outerWrapper">
        <Header />
        <HeaderLogoStatic />

        <main className={styles.main}>
          <section id="introduction" className="slide-up">
            <Introduction
              title="I am a narrative Potter. I choose the vessel to tell my story."
              image1={{
                src: "/images/featured/featured2.png",
                alt: "Yellow vase",
                width: 1024,
                height: 479
              }}
              image2={{
                src: "/images/featured-vase.png",
                alt: "Yellow vase",
                width: 508,
                height: 252
              }}
              image3={{
                src: "/images/featured/featured3.png",
                alt: "Yellow vase",
                width: 508,
                height: 252
              }}
              text1="The quality of the vessel tells a story that is never all seen from one perspective. There is always something around the corner, some element of "
              text2="surprise hidden in the design. The experience of it is immersive. You can turn it around, look inside, fill it up and empty it again. A vessel expresses time in a different way to our usual linear calendars. It turns around like our earth and we are reminded of the cyclical nature of seasons and of time. "
              text3="It is my aim to capture specific moments in time by drawing on the archetypal myths that accompany various changes in the sky. My art"
              text4=" is all related to personal responses and traditional astrological meanings for fleeting moments in time."
            />
          </section>

          {/* Collection */}
          <section
            ref={collectionRef}
            className={`slide-up ${styles.collection}`}
            id="collection"
          >
            <h2>Collection</h2>
            <Collection
              props={{
                images: {
                  small: [
                    { id: 1, src: "/images/gallery/small/vase1.webp" },
                    { id: 8, src: "/images/gallery/small/vase8.webp" },
                    { id: 9, src: "/images/gallery/small/vase9.webp" },
                    { id: 4, src: "/images/gallery/small/vase4.webp" },
                    { id: 5, src: "/images/gallery/small/vase5.webp" },
                    { id: 6, src: "/images/gallery/small/vase6.webp" },
                    { id: 7, src: "/images/gallery/small/vase7.webp" },
                    { id: 2, src: "/images/gallery/small/vase2.webp" },
                    { id: 3, src: "/images/gallery/small/vase3.webp" }
                  ],
                  large: [
                    {
                      id: 1,
                      src: "/images/gallery/large/vase1.webp",
                      width: 576
                    },
                    {
                      id: 2,
                      src: "/images/gallery/large/vase8.webp",
                      width: 532
                    },
                    {
                      id: 3,
                      src: "/images/gallery/large/vase9.webp",
                      width: 502
                    },
                    {
                      id: 4,
                      src: "/images/gallery/large/vase4.webp",
                      width: 576
                    },
                    {
                      id: 5,
                      src: "/images/gallery/large/vase5.webp",
                      width: 576
                    },
                    {
                      id: 6,
                      src: "/images/gallery/large/vase6.webp",
                      width: 515
                    },
                    {
                      id: 7,
                      src: "/images/gallery/large/vase7.webp",
                      width: 346
                    },
                    {
                      id: 8,
                      src: "/images/gallery/large/vase2.webp",
                      width: 450
                    },
                    {
                      id: 9,
                      src: "/images/gallery/large/vase3.webp",
                      width: 515
                    }
                  ]
                }
              }}
            />
          </section>

          {/* CTA */}
          <section ref={ctaRef} className={`slide-up ${styles.cta}`} id="cta">
            <a className={styles.cta_button} href="#contact">
              Contact
            </a>
          </section>

          {/* Video */}
          <section ref={videoRef} className={`slide-up ${styles.video}`}>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/U3aLoZBXdYY?si=ADUv_LfLKOiAKa84"
              title="YouTube video of Lisa Liebermann"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </section>

          {/* About */}
          <section
            id="about"
            ref={aboutRef}
            className={`slide-up ${styles.about} ${styles.text_section}`}
          >
            <h2>About</h2>
            <p>
              My mother taught me to draw in the sand with a stick. As a little
              girl I fell in love with the mark making process and have used it
              for everything...
            </p>
            <Expandable
              label="read-more-about"
              content={
                <p>
                  I have achieved in life. Everything begins with a pencil. Clay
                  is second nature to me. I have been involved with so many
                  different aspects of the pottery making business in my
                  lifetime. The work of a Potter is very close to my heart and I
                  have drawn numerous parallels between humans and pots. Both
                  are vessels, are made from a point of center, fashioned from
                  the inside out, endure vulnerability when opening up and
                  finally, must go through the fire to be transformed.
                </p>
              }
            />

            <div className={styles.image_trio}>
              <div className={`${styles.image} ${styles.image1}`}>
                <Image
                  src="/images/family/Mary.webp"
                  alt="Mary Liebermann"
                  width={1481}
                  height={1499}
                />
              </div>
              <div className={`${styles.image} ${styles.image2}`}>
                <Image
                  src="/images/family/Sammy.webp"
                  alt="Sammy Liebermann"
                  width={1782}
                  height={2960}
                />
              </div>
              <div className={`${styles.image} ${styles.image3}`}>
                <Image
                  src="/images/family/Lisa.webp"
                  alt="Lisa Liebermann"
                  width={1649}
                  height={1306}
                />
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            ref={contactRef}
            className={`slide-up ${styles.contact}`}
            id="contact"
          >
            <h2>Contact</h2>
            <div className={styles.contact_socials}>
              <div>
                <a
                  href="https://www.instagram.com/lisa.lieb.metaphysical.potter/"
                  title="Lisa Liebermann's Instagram page"
                  target="_blank"
                >
                  <Icon iconName={"instagram"} />
                  <p>Instagram</p>
                </a>
              </div>
              <div>
                <a
                  href="mailto:lisa.lieb.tile@gmail.com"
                  title="Lisa Liebermann's email"
                  target="_blank"
                >
                  <Icon iconName={"email"} />
                  <p>lisa.lieb.tile@gmail.com</p>
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@potcast..."
                  title="Lisa Liebermann's Potcast Youtube page"
                  target="_blank"
                >
                  <Icon iconName={"youtube"} />
                  <p>Youtube</p>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}
