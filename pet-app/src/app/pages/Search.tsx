import { useAppSelector } from "../hooks";
import { selectAnimals } from "../slice/animalsSlice";

import { AnimalCard } from "../components/AnimalCard/AnimalCard";

import styles from "./Search.module.css";
import { Key } from "react";

export const Search = () => {
  const { animals } = useAppSelector(selectAnimals);
  return (
    <div className={styles.container}>
      <div className={styles.animalsGrid}>
        {animals.length > 0 &&
          animals.map(
            (item: {
              breeds: any;
              photos: any;
              id: Key | null | undefined;
              name: string;
              breed: string;
              age: string;
            }) => (
              <AnimalCard
                key={item.id}
                name={item.name}
                breed={item.breeds.primary}
                age={item.age}
                src={item.photos[0]?.large}
              />
            )
          )}
      </div>
    </div>
  );
};
