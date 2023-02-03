/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Key } from "react";
import { useNavigate, useLocation } from "react-router";
import { createSearchParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { getSearchParams } from "../utils/search";
import queryString from "query-string";
import {
  selectAnimals,
  loadingAnimals,
  getAnimals,
} from "../slice/animalsSlice";
import { getTypes, loadingTypes } from "../slice/typesSlice";
import { getBreeds, loadingBreeds } from "../slice/breedsSlice";

import { AnimalCard } from "../components/AnimalCard/AnimalCard";
import { FilterBar } from "../components/FilterBar/FilterBar";
import LoaderComponent from "../components/Loader/Loader";
import PaginationComponent from "../components/PaginationComponent/Pagination";

import styles from "./Search.module.css";

export const Search = () => {
  const { animals, pagination } = useAppSelector(selectAnimals);
  const isLoadingAnimals = useAppSelector(loadingAnimals);
  const isLoadingTypes = useAppSelector(loadingTypes);
  const isLoadingBreeds = useAppSelector(loadingBreeds);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const params = queryString.parse(location.search);

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

  return (
    <div className={styles.container}>
      <div className={styles.sidebarWrapper}>
        <FilterBar />
      </div>
      <div className={styles.gridWrapper}>
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
                distance: number;
              }) => (
                <AnimalCard
                  key={item.id}
                  name={item.name}
                  breed={item.breeds.primary}
                  age={item.age}
                  src={item.photos[0]?.large}
                  distance={Math.floor(item.distance)}
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
