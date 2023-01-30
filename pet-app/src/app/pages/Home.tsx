import { useEffect } from "react";
import Search from "../components/Search/Search";
import { getAnimals, selectAnimals } from "../../app/slice/animalsSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import hero from "../assets/dog-cat-hero.png";
import styles from "./Home.module.css";

export const Home = () => {
  const animals = useAppSelector(selectAnimals);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnimals("https://api.petfinder.com/v2/animals/"));
  }, []);
  console.log("animals", animals);
  return (
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <img src={hero} alt="hero" />
        <div className={styles.searchWrapper}>
          <Search />
        </div>
        <div className={styles.header}>
          <h1>Find your new pet</h1>
          <p>There are thousands of animals waiting for a new home</p>
        </div>
      </div>
    </div>
  );
};
