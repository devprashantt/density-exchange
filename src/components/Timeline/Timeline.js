import styles from "./Timeline.module.scss";
import { motion } from "framer-motion";

const Timeline = ({ type }) => {
  switch (type) {
    case "team":
      return (
        <div className={styles.team}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.circle1}></div>
              <p className={styles.text1}>You</p>
            </div>
            <div className={styles.step}>
              <div className={styles.circle2}></div>
              <p className={styles.text2}>Anonymous 1</p>
            </div>
            <div className={styles.step}>
              <div className={styles.circle3}></div>
              <p className={styles.text3}>Anonymous 2</p>
            </div>
            <div className={styles.step}>
              <div className={styles.circle4}></div>
              <p className={styles.text4}>Anonymous 3</p>
            </div>
          </div>
        </div>
      );
    case "work":
      return (
        <div className={styles.work}>
          <div className={styles.steps}></div>
        </div>
      );
  }
};

export default Timeline;
