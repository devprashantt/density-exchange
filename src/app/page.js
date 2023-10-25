import styles from "./page.module.scss";

// CONTAINER
import { Hero, EQBeats, Sounds, MeetAhead, Footer, Test } from "@/containers";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <EQBeats />
      <Sounds />
      <MeetAhead />
      <EQBeats />
      <Test />
      <Footer />
    </div>
  );
}
