import { Button } from "@/components";
import styles from "./Test.module.scss";
import { motion } from "framer-motion"; // Import Framer Motion

const Test = () => {
  const buttonVariants = {
    initial: { opacity: 0, scale: 0.4, y: 10 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={styles.test}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className={styles.para1}>We take privacy seriously</p>
      <h1 className={styles.para2}>Before you get started</h1>
      <p className={styles.para3}>
        We wont share your answers with anyone and wont ever tell you which
        friend said what about you.
      </p>
      <p className={styles.para4}>
        With love, <motion.span variants={textVariants}>Team ahead</motion.span>
      </p>
      <motion.div variants={buttonVariants} initial="initial" animate="animate">
        <Button text={"Start test"} />
      </motion.div>
      <p className={styles.para5}>Take only 5 minutes</p>
    </motion.div>
  );
};

export default Test;
