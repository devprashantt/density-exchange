import { images } from "@/constants";
import styles from "./MeetAhead.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const MeetAhead = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const headerVariants = {
    initial: { x: -100 },
    animate: { x: 0, transition: { duration: 1 } },
  };

  const circle1Variants = {
    initial: { x: "400%", y: "30%" },
    animate: {
      x: "-20%",
      transition: { duration: 2 },
    },
    transition: {
      y: "-50%",
      transition: { duration: 2, delay: 2 },
    },
  };

  const leaf1Variants = {
    initial: { x: "110%", y: "150%", rotate: 0 },
    animate: { y: 0, x: 0, rotate: 360, transition: { duration: 2 } },
  };

  const leaf2Variants = {
    initial: { rotate: 0 },
    animate: { rotate: 360, transition: { duration: 2 } },
  };

  const circle2Variants = {
    initial: { y: "100%" },
    animate: { y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className={styles.meet}
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className={styles.header}>
        <motion.p variants={headerVariants}>Built out of frustration</motion.p>
        <motion.h1 variants={headerVariants}>Meet the ahead app</motion.h1>
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
      <motion.div className={styles.img}>
        <Image src={images.ghost} alt="ghost" className={styles.ghost} />
      </motion.div>
      <motion.div
        className={styles.circle1}
        variants={circle1Variants}
      ></motion.div>
      <motion.div className={styles.leaf1} variants={leaf1Variants}>
        <div className={styles.inside_leaf1}></div>
      </motion.div>
      <motion.div className={styles.leaf2} variants={leaf2Variants}>
        <div className={styles.inside_leaf2}></div>
      </motion.div>
      <motion.div className={styles.circle2} variants={circle2Variants}>
        <div className={styles.inside_circle2}></div>
      </motion.div>
      <motion.div className={styles.dot}>
        <div className={styles.inside_dot} />
      </motion.div>
    </motion.div>
  );
};

export default MeetAhead;
