import styles from "../styles/banner.module.scss";
import { Expandable } from "./Expandable";

export const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <p>
        My mother taught me to draw in the sand with a stick. As a little girl I
        fell in love with the mark making process and have used it for
        everything I have achieved in life. I am a narrative Potter. I choose
        the vessel to tell my story. The quality of the vessel tells a story
        that is never all seen from one perspective. There is always something
        around the corner, some element of surprise hidden in the design
      </p>
      <Expandable
        title="Read more"
        label="read-more"
        content={
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, delectus consequuntur voluptate doloremque nostrum
              omnis natus accusamus vel ipsa eius fugit magnam magni sint
              necessitatibus quibusdam aliquam qui sapiente saepe! Ad nobis qui
              voluptatem, laborum quam perspiciatis quisquam fuga delectus
              molestiae nostrum omnis ullam saepe consectetur facilis eligendi
              aperiam adipisci est. Laborum explicabo quis delectus quas
              inventore ab provident quia. Molestias, odit perspiciatis velit
              rerum, deserunt voluptas placeat tempora quos provident ipsum
              aperiam quia, dolor est veritatis! Voluptates, odio dignissimos
              aut hic perferendis iste vero, facere, nulla cum voluptatum odit.
            </p>
          </>
        }
      />
    </div>
  );
};
