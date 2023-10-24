import styles from "./Button.module.scss";

const Button = ({ text, customClass }) => {
  customClass = customClass ? customClass : "";
  return <button className={styles.btn + " " + customClass}>{text}</button>;
};

export default Button;
