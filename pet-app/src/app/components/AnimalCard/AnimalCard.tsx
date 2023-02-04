import styles from "./styles.module.css";

export interface AnimalCardProps {
  src: string;
  name: string;
  age: string;
  breed: string;
  distance: number;
}

export const AnimalCard = ({
  src,
  age,
  breed,
  name,
  distance,
}: AnimalCardProps) => {
  if (!src) return null;
  return (
    <div className={styles.container}>
      <img src={src} alt="animal" />
      <div className={styles.footer}>
        <h2>{name}</h2>
        <div className={styles.info}>
          <p>{age}</p>
          <ul>
            <li>{breed.slice(0, 22)}</li>
          </ul>
        </div>
        {distance ? <div>{distance} miles away</div> : null}
      </div>
    </div>
  );
};
