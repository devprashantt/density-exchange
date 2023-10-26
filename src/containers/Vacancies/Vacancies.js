import styles from "./Vacancies.module.scss";
import { Card } from "@/components";
import { vacancy } from "@/constants";
import { motion } from "framer-motion"; // Import Framer Motion

const Vacancies = () => {
  return (
    <div className={styles.vacancy}>
      <h1 className={styles.title}>Open Vacancies</h1>
      <div className={styles.body}>
        {vacancy.map((vacancyItem, index) => (
          <motion.div
            className={styles.container}
            key={vacancyItem.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
    </div>
  );
};

export default Vacancies;
