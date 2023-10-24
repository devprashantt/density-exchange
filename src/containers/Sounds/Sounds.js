import styles from "./Sounds.module.scss";

import { Card } from "@/components";
import { emoji } from "@/constants";

const Sounds = () => {
  return (
    <div className={styles.sound}>
      <div className={styles.header}>
        <h1>Does this sound familiar...</h1>
      </div>
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
    </div>
  );
};

export default Sounds;
