import React, { useRef, useEffect, useState } from "react";
import styles from "./Improvement.module.scss";
import { images, improve } from "@/constants";
import { motion } from "framer-motion";

import Image from "next/image";

const Improvement = () => {
  const [activeDot, setActiveDot] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveDot(0);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  const handleScroll = (event) => {
    const container = event.target;
    const itemHeight = container.clientHeight / improve.length;
    const maxActiveDot = improve.length - 1;

    if (event.deltaY > 0 && activeDot < maxActiveDot) {
      setActiveDot(activeDot + 1);
    } else if (event.deltaY < 0 && activeDot > 0) {
      setActiveDot(activeDot - 1);
    }
  };

  return (
    <section className={styles.improve}>
      <div className={styles.header}>
        <motion.div
          className={styles.content}
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 200,
            damping: 30,
          }}
        >
          <p>Wrong improvement and how we are fixing it.</p>
          <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 30,
            }}
          >
            Self-improvement. Ugh.
          </motion.h1>
        </motion.div>

        <motion.div
          className={styles.ghost}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: "tween" }}
        >
          <Image src={images.icon_2} alt={"ghost"} />
        </motion.div>
      </div>
      <div className={styles.timeline} ref={ref} onWheel={handleScroll}>
        {improve?.map((item, index) => (
          <div
            key={index}
            className={
              activeDot === index ? `${styles.card_active}` : styles.card
            }
            onClick={() => setActiveDot(index)}
          >
            <div className={styles.line}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.content}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Improvement;
