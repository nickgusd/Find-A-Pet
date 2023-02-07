/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  selectAnimal,
  getAnimal,
  loadingAnimal,
} from "../slice/singleAnimalSlice";

import { Carousel } from "../components/Carousel/Carousel";
import Loader from "../components/Loader/Loader";

import styles from "./Animal.module.css";

export const Animal = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const selector = useAppSelector(selectAnimal);
  const loading = useAppSelector(loadingAnimal);
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getAnimal(`https://api.petfinder.com/v2/animals/${id}`));
  }, []);

  const { animal } = selector;

  return (
    <div>
      {loading === "loading" && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {Object.keys(animal).length && loading !== "loading" ? (
        <div className={styles.carouselWrapper}>
          <Carousel photos={animal?.photos} />
        </div>
      ) : null}
    </div>
  );
};
