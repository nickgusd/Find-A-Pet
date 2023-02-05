import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectAnimal, getAnimal } from "../slice/singleAnimalSlice";

import { Carousel } from "../components/Carousel/Carousel";

import styles from "./Animal.module.css";

export const Animal = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const selector = useAppSelector(selectAnimal);
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getAnimal(`https://api.petfinder.com/v2/animals/${id}`));
  }, []);

  const { animal } = selector;

  return (
    <div>
      {Object.keys(animal).length && (
        <div className={styles.carouselWrapper}>
          <Carousel photos={animal?.photos} />
        </div>
      )}
    </div>
  );
};
