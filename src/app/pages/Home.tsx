import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import { createSearchParams } from "react-router-dom";
import Search from "../components/Search/Search";
import { getSearchParams } from "../utils/search";
import Button from "../components/Button/Button";

import hero from "../assets/dog-cat-hero.png";
import mobileHero from "../assets/Dogs-Cats-mobile.png";
import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [noLocation, setNoLocation] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isSmallMobile = useMediaQuery({ maxWidth: 768 });
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
    if (!isTabletOrMobile) {
      if (event.key === "Enter") {
        if (params.location === "") {
          setNoLocation(true);
          return;
        } else {
          setNoLocation(false);
        }
        navigate({
          pathname: "/search",
          search: `?${createSearchParams(getSearchParams(params))}`,
        });
      }
    } else {
      if (params.location === "") {
        setNoLocation(true);
        return;
      } else {
        setNoLocation(false);
      }
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(getSearchParams(params))}`,
      });
    }
  };

  return (
    <div className={styles.container}>
      {!isTabletOrMobile && (
        <div className={styles.heroWrapper}>
          <img
            src={!isTabletOrMobile ? hero : mobileHero}
            alt="hero"
            className={isTabletOrMobile ? styles.heroMobile : ""}
          />
          <div className={styles.searchWrapper} onKeyDown={onSearch}>
            <Search
              isMobile={false}
              isSearchPage={false}
              onClick={null}
              size="large"
              icon="search"
              noLocation={noLocation}
              onChangeSearch={handleChangeSearch}
              onChangeLocation={handleChangeLocation}
            />
          </div>
          <div className={styles.header}>
            <h1 className={isTabletOrMobile ? styles.mobileHeader : ""}>
              Find your new pet
            </h1>
            <p className={isTabletOrMobile ? styles.mobileText : ""}>
              There are thousands of animals waiting for a new home
            </p>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className={styles.mobileHeroWrapper}>
          <Search
            isMobile
            isSearchPage={isSmallMobile}
            onClick={null}
            size="large"
            icon="search"
            noLocation={noLocation}
            onChangeSearch={handleChangeSearch}
            onChangeLocation={handleChangeLocation}
          />
          <div className={styles.mobileHeader}>
            <h1>Find your new pet</h1>
            <p className={styles.mobileText}>
              There are thousands of animals waiting for a new home
            </p>
          </div>
          <div className={styles.mobileImageWrapper}>
            <img src={mobileHero} alt="hero" className={styles.heroMobile} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button primary label="Search" onClick={onSearch} />
          </div>
        </div>
      )}
    </div>
  );
};
