import styles from "./Card.module.scss";
import Button from "../Button/Button";

const Card = ({
  type,
  heading,
  bullets,
  desc,
  emoji,
  color,
  rotation,
  text,
}) => {
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
    case "text":
      return (
        <div className={styles.text}>
          <h1>{heading}</h1>
          <p>{desc}</p>
        </div>
      );
    case "bullet":
      return (
        <div className={styles.bullet}>
          <h1>{heading}</h1>
          <ul>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <Button text="See details" />
        </div>
      );
    default:
      return (
        <div className={styles.emoji}>
          <span role="img" aria-label="emoji">
            {emoji}
          </span>
          <h1>{heading}</h1>
          <p>{desc}</p>
        </div>
      );
  }
};

export default Card;
