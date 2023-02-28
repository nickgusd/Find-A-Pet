import noResults from "../../assets/no-results.png";

import styles from "./styles.module.css";

export const NoResults = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={noResults} alt="no-results" />
        <div className={styles.textWrapper}>
          <h1>No Results Found</h1>
        </div>
        <p>Please try another search!</p>
      </div>
    </div>
  );
};
