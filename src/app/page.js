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
} from "@/containers";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <EQBeats />
      <Sounds />
      <MeetAhead />
      {/* TIMELINE */}
      <EQBeats />
      {/* TEAM */}
      <Test />
      <Work />
      <Vacancies />
      <Footer />
    </div>
  );
}
