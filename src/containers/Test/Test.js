import { Button } from "@/components";
import styles from "./Test.module.scss";

const Test = () => {
  return (
    <div className={styles.test}>
      <p className={styles.para1}>We take privacy seriously</p>
      <h1 className={styles.para2}>Before you get started</h1>
      <p className={styles.para3}>
        We wont share you answers with anyone and wont ever tell you which
        friend said what about you.
      </p>
      <p className={styles.para4}>
        With love, <span>Team ahead</span>
      </p>
      <Button text={"Start test"} />
      <p className={styles.para5}>Take only 5 minutes</p>
    </div>
  );
};

export default Test;
