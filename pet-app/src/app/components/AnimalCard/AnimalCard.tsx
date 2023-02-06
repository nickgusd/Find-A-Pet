import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface AnimalCardProps {
  src: string;
  name: string;
  age: string;
  breed: string;
  distance: number;
  type: string;
  id: number;
  organizationId: string;
}

export const AnimalCard = ({
  src,
  age,
  breed,
  name,
  distance,
  type,
  id,
  organizationId,
}: AnimalCardProps) => {
  if (!src) return null;
  return (
    <Link className={styles.container} to={`/${type}/${id}/${organizationId}}`}>
      <img src={src} alt="animal" />
      <div className={styles.footer}>
        <h2>{name}</h2>
        <div className={styles.info}>
          <p>{age}</p>
          <ul>
            <li>{breed.slice(0, 22)}</li>
          </ul>
        </div>
        {distance ? (
          <div className={styles.distance}>{distance} miles away</div>
        ) : null}
      </div>
    </Link>
  );
};
