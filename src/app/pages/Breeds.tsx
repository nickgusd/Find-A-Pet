import { Link } from "react-router-dom";

import cat from "../assets/cat-breeds-1024x683.png";
import dog from "../assets/dog-breed-large.png";

import styles from "./Breeds.module.css";

export const Breeds = () => {
  return (
    <div className={styles.breedsContainer}>
      <div className={styles.innerWrapper}>
        <Link className={styles.leftContent} to="/dog-breeds">
          <div className={styles.leftHeader}>Dog Breeds</div>
          <img src={dog} alt="dog" />
        </Link>
        <Link className={styles.rightContent} to="/cat-breeds">
          <div className={styles.rightHeader}>Cat Breeds</div>
          <img src={cat} alt="cat" />
        </Link>
      </div>
    </div>
  );
};
