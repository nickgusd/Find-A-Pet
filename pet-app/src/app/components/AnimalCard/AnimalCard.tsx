import styles from "./styles.module.css";

export interface AnimalCardProps {
  src: string;
  name: string;
  age: string;
  breed: string;
}

export const AnimalCard = ({ src, age, breed, name }: AnimalCardProps) => {
  return (
    <div className={styles.container}>
      <img src={src} alt="animal" />
      <div className={styles.footer}>
        <h2>{name}</h2>
        <div className={styles.info}>
          <p>{age}</p>
          <ul>
            <li>{breed}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
