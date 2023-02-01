import cat from "../assets/cat-breeds-1024x683.png";
import dog from "../assets/dog-breed-large.png";

import styles from "./Breeds.module.css";

export const Breeds = () => {
  return (
    <div className={styles.breedsContainer}>
      <div className={styles.innerWrapper}>
        <div className={styles.leftContent}>
          <div className={styles.leftHeader}>Dog Breeds</div>
          <img src={dog} alt="dog" />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.rightHeader}>Cat Breeds</div>
          <img src={cat} alt="cat" />
        </div>
      </div>
    </div>
  );
};
