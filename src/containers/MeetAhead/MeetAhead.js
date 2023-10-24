import { images } from "@/constants";
import styles from "./MeetAhead.module.scss";
import Image from "next/image";

const MeetAhead = () => {
  return (
    <div className={styles.meet}>
      <div className={styles.header}>
        <p>Built out of frustration</p>
        <h1>Meet the ahead app</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.left}></div>
        <div className={styles.content}>
          A personalized pocket coach that provides bite-sized science driver
          tools to boost emotional intelligence and mental well-being.
          <br />
          <br />
          Think of as a pocket coach that helps you to be more aware of your
          emotions and thoughts, and to be more mindful of your actions.
        </div>
      </div>
      {/* SHAPES */}
      <div className={styles.img}>
        <Image src={images.ghost} alt="ghost" className={styles.ghost} />
      </div>
      <div className={styles.circle1} />
      <div className={styles.leaf1} />
      <div className={styles.leaf2} />
      <div className={styles.circle2} />
      <div className={styles.dot}>
        <div className={styles.inside_dot} />
      </div>
    </div>
  );
};

export default MeetAhead;
