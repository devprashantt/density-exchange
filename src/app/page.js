"use client";

import styles from "./page.module.scss";

// CONTAINER
import {
  Hero,
  EQBeats,
  Sounds,
  MeetAhead,
  Footer,
  Test,
  Work,
  Vacancies,
  Team,
  Improvement,
} from "@/containers";
import { Navbar } from "@/components";

import { motion } from "framer-motion";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <EQBeats />
      <Sounds />
      <MeetAhead />
      <Improvement />
      <EQBeats />
      <Team />
      <Test />
      <Work />
      <Vacancies />
      <Footer />
    </div>
  );
}
