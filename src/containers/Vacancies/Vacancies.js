import styles from "./Vacancies.module.scss";
import { Card } from "@/components";
import { vacancy } from "@/constants";

const Vacancies = () => {
  return (
    <div className={styles.vacancy}>
      <h1 className={styles.title}>Open Vacancies</h1>
      <div className={styles.body}>
        {vacancy.map((vacancy) => (
          <Card
            key={vacancy.id}
            type="bullet"
            heading={vacancy.title}
            bullets={vacancy.bullets}
          />
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
