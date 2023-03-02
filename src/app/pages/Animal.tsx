/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
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
import { BsFillHeartFill } from "react-icons/bs";
import Loader from "../components/Loader/Loader";
import API from "../api/favoritesAPI";

import styles from "./Animal.module.css";
import { isFavorite } from "../utils/favorite";

export const Animal = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const selector = useAppSelector(selectAnimal);
  const loading = useAppSelector(loadingAnimal);
  const loadingOrg = useAppSelector(loadingOrganizations);
  const selectOrg = useAppSelector(selectOrganizations);
  const [favorites, setFavorites] = useState([]);
  const [saved, setSaved] = useState(false);
  const id = location.pathname.split("/")[2];
  const orgId = location.pathname.split("/")[3].split("%")[0];
  const type = location.pathname.split("/")[1];
  const { user = {}, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    dispatch(getAnimal(`https://api.petfinder.com/v2/animals/${id}`));
    dispatch(
      getOrganizations(`https://api.petfinder.com/v2/organizations/${orgId}`)
    );
  }, []);

  useEffect(() => {
    if (user.sub) {
      API.getFavorites({ userId: user?.sub })
        .then((res) => {
          const { data } = res;
          setFavorites(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user, saved]);

  const { animal } = selector;
  const { organization } = selectOrg;

  const handleSave = (e: any) => {
    e.preventDefault();
    if (isAuthenticated) {
      API.saveFavorite({
        name: animal.name,
        type: type,
        age: animal.age,
        petId: animal.id.toString(),
        userId: user?.sub,
        breed: animal.breeds.primary,
        organizationId: animal.organization_id,
        image: animal.photos[0].full || animal.photos[0].large,
        distance: animal.distance,
      })
        .catch((err) => console.log("err", err))
        .finally(() => setSaved(!saved));
    } else {
      loginWithRedirect({
        appState: {
          returnTo: window.location.pathname + window.location.search,
        },
      });
    }
  };

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
            <BsFillHeartFill
              onClick={handleSave}
              color={isFavorite(favorites, animal.id) || "white"}
            />
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
