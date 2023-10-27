import styles from "./Vacancies.module.scss";
import { Card } from "@/components";
import { vacancy } from "@/constants";
import { motion } from "framer-motion";
import MotionWrap from "@/utils/MotionWrap";

const Vacancies = () => {
  return (
    <section className={styles.vacancy}>
      <h1 className={styles.title}>Open Vacancies</h1>
      <div className={styles.body}>
        {vacancy.map((vacancyItem, index) => (
          <motion.div
            className={styles.container}
            key={vacancyItem.id}
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card
              type="bullet"
              heading={vacancyItem.title}
              bullets={vacancyItem.bullets}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MotionWrap(Vacancies);
