import styles from "./Team.module.scss";
import Image from "next/image";
import { Timeline } from "@/components";
import { images } from "@/constants";

const Team = () => {
  return (
    <div className={styles.team}>
      <p className={styles.sub_heading}>
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </p>
      <h1 className={styles.heading}>Even wondered what other think of you?</h1>
      <div className={styles.steps}>
        <hr className={styles.line} />
        <Image src={images.badge_1} alt="badge" className={styles.badge} />
        <Image src={images.badge_2} alt="badge" className={styles.badge} />
        <Image src={images.badge_3} alt="badge" className={styles.badge} />
      </div>
      <div className={styles.steps_content}>
        <p className={styles.text}>Answer question on your social network</p>
        <p className={styles.text}>
          Let other anonymous users know that you are on the platform
        </p>
        <p className={styles.text}>
          Find out where you are on your social network and connect with others
        </p>
      </div>
      <div className={styles.timeline}>
        <Timeline type="team" />
      </div>
    </div>
  );
};

export default Team;
