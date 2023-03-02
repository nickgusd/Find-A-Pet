/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { createSearchParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { getSearchParams } from "../utils/search";
import { isFavorite } from "../utils/favorite";
import queryString from "query-string";
import {
  selectAnimals,
  loadingAnimals,
  getAnimals,
} from "../slice/animalsSlice";
import { getTypes, loadingTypes, selectTypes } from "../slice/typesSlice";
import { getBreeds, loadingBreeds } from "../slice/breedsSlice";

import { AnimalCard } from "../components/AnimalCard/AnimalCard";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { NoResults } from "../components/NoResults/NoResults";
import LoaderComponent from "../components/Loader/Loader";
import PaginationComponent from "../components/PaginationComponent/Pagination";
import API from "../api/favoritesAPI";

import styles from "./Search.module.css";

export const Search = () => {
  const { animals, pagination } = useAppSelector(selectAnimals);
  // const types = useAppSelector(selectTypes);
  const isLoadingAnimals = useAppSelector(loadingAnimals);
  const isLoadingTypes = useAppSelector(loadingTypes);
  const isLoadingBreeds = useAppSelector(loadingBreeds);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const location = useLocation();
  const params = queryString.parse(location.search);
  // console.log("params", params);

  useEffect(() => {
    setPage(Number(params.page));
    dispatch(
      getAnimals("https://api.petfinder.com/v2/animals" + location.search)
    );
    dispatch(
      getBreeds(
        `https://api.petfinder.com/v2/types/${
          getSearchParams(params).type
        }/breeds`
      )
    );
    dispatch(getTypes(`https://api.petfinder.com/v2/types/${params.type}`));
  }, [location.search]);

  useEffect(() => {
    if (user) {
      API.getFavorites({ userId: user?.sub })
        .then((res) => {
          const { data } = res;
          setFavorites(data);
        })
        .catch((err) => console.log(err));
    }
  }, [saved]);

  const onPageChange = (e: any, { activePage }: any): void => {
    setPage(activePage);
    dispatch(
      getAnimals(
        "https://api.petfinder.com/v2/animals" +
          `?${createSearchParams({
            ...params,
            page: activePage,
          })}`
      )
    );

    navigate({
      pathname: "/search",
      search: `?${createSearchParams({
        ...params,
        page: activePage,
      })}`,
    });
  };

  if (
    isLoadingAnimals === "loading" ||
    isLoadingBreeds === "loading" ||
    isLoadingTypes === "loading"
  ) {
    return (
      <div className={styles.loader}>
        <LoaderComponent />;
      </div>
    );
  }

  const handleClick = (e: any, id: string | number) => {
    e.preventDefault();
    const currentAnimal = animals?.find(
      (item: { id: string | number }) => item.id === id
    );

    if (isAuthenticated) {
      API.saveFavorite({
        name: currentAnimal?.name,
        type: params.type,
        age: currentAnimal?.age,
        petId: currentAnimal?.id?.toString(),
        userId: user?.sub,
        breed: currentAnimal?.breeds?.primary,
        organizationId: currentAnimal?.organization_id,
        image:
          currentAnimal?.photos[0]?.full || currentAnimal?.photos[0]?.large,
        distance: currentAnimal?.distance,
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
    <div className={styles.container}>
      <div className={styles.sidebarWrapper}>
        <FilterBar />
      </div>
      <div className={styles.gridWrapper}>
        <div className={styles.animalsGrid}>
          {!animals.length && (
            <NoResults
              header={"No Results Found!"}
              content={"Please try searching again!"}
            />
          )}
          {animals.length > 0 &&
            animals.map(
              (item: {
                breeds: any;
                photos: any;
                id: any;
                name: string;
                breed: string;
                age: string;
                distance: number;
                type: string;
                organization_id: string;
              }) => (
                <AnimalCard
                  id={item.id}
                  key={item.id}
                  favorite={isFavorite(favorites, item.id)}
                  isSearchPage
                  onClick={(e: any) => handleClick(e, item.id)}
                  type={item.type.toLowerCase()}
                  name={item.name}
                  breed={item.breeds.primary}
                  age={item.age}
                  src={item.photos[0]?.large}
                  distance={Math.floor(item.distance)}
                  organizationId={item.organization_id}
                  onClose={null}
                />
              )
            )}
        </div>
        <div className={styles.pagination}>
          <PaginationComponent
            totalPages={pagination.total_pages}
            onChange={onPageChange}
            activePage={page}
          />
        </div>
      </div>
    </div>
  );
};
