import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Hero</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, voluptatum, quos, quibusdam dolorum vero quia voluptatem
          quae repellat voluptatibus culpa. Quisquam voluptate, voluptatum,
          quos, quibusdam dolorum vero quia voluptatem quae repellat
          voluptatibus culpa.
        </p>
      </div>
      <div className={styles.img}>
        <img />
      </div>
    </div>
  );
};

export default Hero;
