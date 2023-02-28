import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { FiXCircle } from "react-icons/fi";
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
  onClick: any;
  isSearchPage: boolean;
  onClose: any;
  favorite: any;
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
  onClick,
  isSearchPage,
  onClose,
  favorite,
}: AnimalCardProps) => {
  if (!src) return null;
  return (
    <Link className={styles.container} to={`/${type}/${id}/${organizationId}}`}>
      <img src={src} alt="animal" />
      {isSearchPage ? (
        <BsFillHeartFill onClick={onClick} color={favorite} />
      ) : (
        <FiXCircle onClick={onClose} color="white" />
      )}
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
