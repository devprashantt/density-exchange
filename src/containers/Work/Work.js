import { images, work } from "@/constants";
import { Card } from "@/components";

import styles from "./Work.module.scss";

import Image from "next/image";

const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.header}>
        <div className={styles.title}>Work with us</div>
        <div className={styles.img}>
          <Image src={images.ahead_text} alt="img" className={styles.ahead} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <Image src={images.ghost} alt="img" className={styles.work_img} />
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
    </div>
  );
};

export default Work;
