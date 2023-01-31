import React, { useState } from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import Search from "../components/Search/Search";
import { getAnimals } from "../../app/slice/animalsSlice";
import { useAppDispatch } from "../../app/hooks";
import { getSearchParams } from "../utils/search";

import hero from "../assets/dog-cat-hero.png";
import styles from "./Home.module.css";

export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const params = {
    type: searchValue,
    location: locationValue,
    page: "1",
  };

  const handleChangeSearch = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setSearchValue(event.currentTarget.value);
  };

  const handleChangeLocation = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setLocationValue(event.currentTarget.value);
  };

  const onSearch = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      dispatch(
        getAnimals(
          "https://api.petfinder.com/v2/animals" +
            `?${createSearchParams(getSearchParams(params))}`
        )
      );
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(getSearchParams(params))}`,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <img src={hero} alt="hero" />
        <div className={styles.searchWrapper} onKeyDown={onSearch}>
          <Search
            onChangeSearch={handleChangeSearch}
            onChangeLocation={handleChangeLocation}
          />
        </div>
        <div className={styles.header}>
          <h1>Find your new pet</h1>
          <p>There are thousands of animals waiting for a new home</p>
        </div>
      </div>
    </div>
  );
};
