
import styles from "./Sounds.module.scss";
import { motion } from "framer-motion";
import { Card } from "@/components";
import { emoji } from "@/constants";

const Sounds = () => {
  const parentVariants = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const headerVariants = {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, type: "spring", stiffness: 80 },
    },
  };

  return (
    <motion.div
      className={styles.sound}
      initial="initial"
      animate="animate"
      variants={parentVariants}
    >
      <motion.div className={styles.header} variants={headerVariants}>
        <h1>Does this sound familiar...</h1>
      </motion.div>
      <div className={styles.cards}>
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
      </div>
    </motion.div>
  );
};

export default Sounds;
