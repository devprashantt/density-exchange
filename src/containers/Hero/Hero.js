import { images } from "@/constants";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.tag_line}>Ahead app</p>
        <h1 className={styles.title}>
          Master your life <br /> by mastering <br />
          emotions
        </h1>
        <div className={styles.action}>
          <Image src={images.app_store} alt="app" />

          <div className={styles.ratings}>
            <div className={styles.stars}>⭐⭐⭐⭐</div>
            <p className={styles.sub_title}>100+ App store reviews</p>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <Image src={images.ahead} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
