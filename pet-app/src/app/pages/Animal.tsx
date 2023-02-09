/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  selectAnimal,
  getAnimal,
  loadingAnimal,
} from "../slice/singleAnimalSlice";

import {
  getOrganizations,
  loadingOrganizations,
  selectOrganizations,
} from "../slice/organizationsSlice";

import { Carousel } from "../components/Carousel/Carousel";
import { AnimalBio } from "../components/AnimalBio/AnimalBio";
import { ContactCard } from "../components/ContactCard/ContactCard";
import Loader from "../components/Loader/Loader";

import styles from "./Animal.module.css";

export const Animal = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const selector = useAppSelector(selectAnimal);
  const loading = useAppSelector(loadingAnimal);
  const loadingOrg = useAppSelector(loadingOrganizations);
  const selectOrg = useAppSelector(selectOrganizations);
  const id = location.pathname.split("/")[2];
  const orgId = location.pathname.split("/")[3].split("%")[0];

  useEffect(() => {
    dispatch(getAnimal(`https://api.petfinder.com/v2/animals/${id}`));
    dispatch(
      getOrganizations(`https://api.petfinder.com/v2/organizations/${orgId}`)
    );
  }, []);

  const { animal } = selector;
  const { organization } = selectOrg;

  return (
    <div>
      {loading === "loading" && loadingOrg === "loading" && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {Object.keys(animal).length !== 0 && loading !== "loading" && (
        <>
          <div className={styles.carouselWrapper}>
            <Carousel photos={animal?.photos} />
          </div>
          <div className={styles.contentWrapper}>
            <AnimalBio data={animal} />
            <ContactCard data={animal} org={organization} />
          </div>
        </>
      )}
    </div>
  );
};
