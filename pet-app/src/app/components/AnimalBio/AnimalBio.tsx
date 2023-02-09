import styles from "./styles.module.css";

import { convertToString } from "../../utils/string";

export const AnimalBio = ({ data }: any) => {
  return (
    <div className={styles.bioWrapper}>
      <div className={styles.header}>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.breed}>
        <h2>{data.breeds.primary}</h2>
        <span className={styles.spacer} />
        <h2>{data.contact.address.city}</h2>
      </div>
      <div className={styles.info}>
        <div>{data.gender}</div>
        <span className={styles.spacer} />
        <div>{data.age}</div>
        <span className={styles.spacer} />
        <div>{data.size}</div>
      </div>
      <div className={styles.about}>
        <h3>House Trained</h3>
        <p>{convertToString(data.attributes.house_rained)}</p>
        <h3>Shots up to date</h3>
        <p>{convertToString(data.attributes.shots_current)}</p>
        <h3>Spayed / Nuetered</h3>
        <p>{convertToString(data.attributes.spayed_nuetered)}</p>
        <h3>Good with children</h3>
        <p>{convertToString(data.environment.children)}</p>
        <h3>Good with dogs</h3>
        <p>{convertToString(data.environment.dogs)}</p>
        <h3>Good with cats</h3>
        <p>{convertToString(data.environment.cats)}</p>
      </div>
      {data.description && (
        <div className={styles.description}>
          <h3>About {data.name}</h3>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};
