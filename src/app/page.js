import styles from "./page.module.scss";

// CONTAINER
import { Hero, EQBeats } from "@/containers";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <EQBeats />
    </div>
  );
}
