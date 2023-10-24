import Image from "next/image";

import styles from "./Navbar.module.scss";
import Button from "../Button/Button";
import { navbar, images } from "@/constants";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={images.ahead} alt={"logo"} />
      </div>
      <div className={styles.menus}>
        {navbar.map((option, index) => {
          return (
            <a href={option.path} key={index}>
              {option.name}
            </a>
          );
        })}
      </div>
      <Button text={"Download app"} />
    </div>
  );
};

export default Navbar;
