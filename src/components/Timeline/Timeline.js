"use client";

import styles from "./Timeline.module.scss";
import { motion } from "framer-motion";

const Timeline = ({ type }) => {
  switch (type) {
    case "team":
      return (
        <div className={styles.team}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.circle1}></div>
                <p className={styles.text1}>You</p>
              </motion.div>
            </div>
            <div className={styles.step}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.circle2}></div>
                <p className={styles.text2}>Anonymous 1</p>
              </motion.div>
            </div>
            <div className={styles.step}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.circle3}></div>
                <p className={styles.text3}>Anonymous 2</p>
              </motion.div>
            </div>
            <div className={styles.step}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.circle4}></div>
                <p className={styles.text4}>Anonymous 3</p>
              </motion.div>
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
