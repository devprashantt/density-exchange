import styles from "./EQBeats.module.scss";
import MotionWrap from "@/utils/MotionWrap";

const EQBeats = () => {
  return (
    <section className={styles.eq}>
      <h1 className={styles.title}>EQ Beats IQ</h1>
      <div className={styles.para}>
        People with high emotional intelligence are often referred to as having
        a lot of emotional quotient, and it’s a measure of the emotional
        intelligence of an individual.
      </div>
      <div className={styles.para}>
        People with high emotional intelligence are often referred to as having
        a lot emotional quotient, and it’s a measure of the emotional
        intelligence of an individual.
      </div>
    </section>
  );
};

export default MotionWrap(EQBeats);
