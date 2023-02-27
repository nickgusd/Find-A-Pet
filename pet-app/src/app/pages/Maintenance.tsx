import image from "../assets/no-results.png";

import styles from "./Maintenance.module.css";

export const Maintenance = () => {
  return (
    <div className={styles.container}>
      <h1>Mobile site under maintenance!</h1>
      <div className={styles.image}>
        <img src={image} alt="not-found" />
      </div>
    </div>
  );
};
