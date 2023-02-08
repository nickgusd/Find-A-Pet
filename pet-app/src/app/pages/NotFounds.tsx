import { Link } from "react-router-dom";

import ButtonComponent from "../components/Button/Button";
import image from "../assets/no-results.png";

import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 Not Found</h1>
      <div className={styles.image}>
        <img src={image} alt="not-found" />
      </div>
      <Link to={"/"}>
        <ButtonComponent secondary label="Return home" />
      </Link>
    </div>
  );
};
