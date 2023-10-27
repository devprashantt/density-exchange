import styles from "./Sounds.module.scss";
import { motion } from "framer-motion";
import { Card } from "@/components";
import { emoji } from "@/constants";
import MotionWrap from "@/utils/MotionWrap";

const Sounds = () => {
  const headerVariants = {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, type: "spring", stiffness: 80 },
    },
  };

  return (
    <div className={styles.sound}>
      <motion.div className={styles.header} variants={headerVariants}>
        <h1>Does this sound familiar...</h1>
      </motion.div>
      <motion.div
        className={styles.cards}
        whileInView={{
          x: [0, 100, 0],
          opacity: [0, 0, 1],
          transition: { type: "spring", stiffness: 80 },
        }}
      >
        {emoji.map((item, index) => (
          <Card
            key={index}
            type={item.type}
            emoji={item.emoji}
            heading={item.heading}
            desc={item.desc}
            color={item.color}
            rotation={item.rotation}
            text={item.text}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrap(Sounds);
