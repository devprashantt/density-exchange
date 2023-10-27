import { images } from "@/constants";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionWrap from "@/utils/MotionWrap";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.tag_line}>Ahead app</p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.title}
        >
          Master your life <br /> by mastering <br /> emotions
        </motion.h1>
        <div className={styles.action}>
          <Image src={images.app_store} alt="app" />

          <div className={styles.ratings}>
            <div className={styles.stars}>⭐⭐⭐⭐</div>
            <p className={styles.sub_title}>100+ App store reviews</p>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <Image src={images.hero} alt="hero" className={styles.hero} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.icon1}
        >
          <Image src={images.icon_1} alt="icon1" className={styles.icon} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={styles.icon2}
        >
          <Image src={images.icon_2} alt="icon2" className={styles.icon} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className={styles.icon3}
        >
          <Image src={images.icon_3} alt="icon3" className={styles.icon} />
        </motion.div>
      </div>
    </section>
  );
};

export default MotionWrap(Hero);
