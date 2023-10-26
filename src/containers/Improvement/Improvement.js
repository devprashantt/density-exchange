"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./Improvement.module.scss";
import { images } from "@/constants";
import Image from "next/image";

const Improvement = () => {
  const timelineItems = [
    {
      title: "Its not easy as 1-2-3",
      description:
        "The journey of change may be longer than the change itself. We get to the point an tell you want to know (and nothing else).",
    },
    {
      title: "Its not easy as 1-2-3",
      description:
        "The journey of change may be longer than the change itself. We get to the point an tell you want to know (and nothing else).",
    },
    {
      title: "Its not easy as 1-2-3",
      description:
        "The journey of change may be longer than the change itself. We get to the point an tell you want to know (and nothing else).",
    },
    {
      title: "Its not easy as 1-2-3",
      description:
        "The journey of change may be longer than the change itself. We get to the point an tell you want to know (and nothing else).",
    },
  ];

  const [activeDot, setActiveDot] = useState(0);

  // ON SCROLL CHANGE ACTIVE STATE
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
    const itemHeight = container.clientHeight / timelineItems.length;
    const maxActiveDot = timelineItems.length - 1;

    if (event.deltaY > 0 && activeDot < maxActiveDot) {
      setActiveDot(activeDot + 1);
    } else if (event.deltaY < 0 && activeDot > 0) {
      setActiveDot(activeDot - 1);
    }
  };

  return (
    <div className={styles.improve}>
      <div className={styles.header}>
        <div className={styles.content}>
          <p>Wrong improvement and how we are fixing it.</p>
          <h1>Self-improvement. Ugh.</h1>
        </div>
        <Image src={images.ghost} alt={"ghost"} className={styles.ghost} />
      </div>
      <div className={styles.timeline} ref={ref} onWheel={handleScroll}>
        {timelineItems.map((item, index) => (
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
    </div>
  );
};

export default Improvement;
