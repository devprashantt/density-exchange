import styles from "./Card.module.scss";

const Card = ({ type, heading, desc, emoji, color, rotation, text }) => {
  switch (type) {
    case "emoji":
      return (
        <div
          className={styles.emoji}
          style={{
            backgroundColor: color,
            transform: `rotate(${rotation}deg);`,
            color: text,
          }}
        >
          <span role="img" aria-label="emoji">
            {emoji}
          </span>
          <h1>{heading}</h1>
          <p>{desc}</p>
        </div>
      );
    case "noEmoji":
      return (
        <div className={styles.card}>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>Title</h3>
            <p className={styles.card__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, quidem, voluptatum, doloremque quod voluptas
              voluptates quia quibusdam dolorum nemo quae. Quisquam voluptatibus
              quidem voluptatum doloremque quod voluptas voluptates quia
              quibusdam dolorum nemo quae.
            </p>
          </div>
        </div>
      );
    case "noEmojiNoBg":
      return (
        <div className={styles.card}>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>Title</h3>
            <ul className={styles.card__list}>
              <li className={styles.card__listItem}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className={styles.card__listItem}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className={styles.card__listItem}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className={styles.card__listItem}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
      );
  }
};

export default Card;
