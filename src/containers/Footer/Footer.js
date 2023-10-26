import { images } from "@/constants";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <hr className={styles.border} />
      <div className={styles.logo}>
        <Image src={images.ahead} alt="EQBeats" className={styles.img} />
        <Image src={images.ahead_text} alt="EQBeats" className={styles.text} />
      </div>
      <div className={styles.socials}>
        <div className={styles.social}>
          <div className={styles.icon}></div>
          <p>Linkedin</p>
        </div>
        <div className={styles.social}>
          <div className={styles.icon}></div>
          <p>Linkedin</p>
        </div>
      </div>
      <Image src={images.app_store} alt="app" />

      <p>@2023 Prashant Kumar Singh. All rights reserved</p>
    </section>
  );
};

export default Footer;
