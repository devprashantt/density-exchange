import styles from "./page.module.scss";

// CONTAINER
import { Hero } from "@/containers";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
    </div>
  );
}
