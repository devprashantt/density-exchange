import { images, work } from "@/constants";
import { Card } from "@/components";

import styles from "./Work.module.scss";

import Image from "next/image";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const Work = () => {
  return (
    <section className={styles.work}>
      <div className={styles.header}>
        <motion.div
          className={styles.title}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Work with us
        </motion.div>
        <motion.div
          className={styles.img}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image src={images.ahead_text} alt="img" className={styles.ahead} />
        </motion.div>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <Image src={images.icon_2} alt="img" className={styles.work_img} />
          <div className={styles.about}>
            <h1>About</h1>
            <p>
              We are a team of passionate people who love to build amazing
              products. We really love our work and we do it with pleasure.
            </p>
          </div>
          <div className={styles.product}>
            <h1>Product</h1>
            <p>
              We are a team of passionate people who love to build amazing
              products. We really love our work and we do it with pleasure.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.cards}>
            {work.map((item) => {
              return (
                <Card
                  key={item.id}
                  heading={item.title}
                  desc={item.text}
                  type={item.type}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
