import noResults from "../../assets/no-results.png";

import styles from "./styles.module.css";

export const NoResults = ({ header, content }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={noResults} alt="no-results" />
        <div className={styles.textWrapper}>
          <h1>{header}</h1>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};
