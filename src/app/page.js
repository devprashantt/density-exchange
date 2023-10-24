import styles from "./page.module.scss";

// CONTAINER
import { Hero } from "@/containers";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
