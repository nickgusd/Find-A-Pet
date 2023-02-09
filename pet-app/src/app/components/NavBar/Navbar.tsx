import { useState } from "react";
import {
  Link,
  useLocation,
  createSearchParams,
  useNavigate,
} from "react-router-dom";

import logo from "../../assets/Find-a-Pet-logo.svg";
import { getSearchParams } from "../../utils/search";

import { getPath } from "../../utils/string";

import Search from "../Search/Search";

import styles from "./styles.module.css";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [noLocation, setNoLocation] = useState(false);
  const leftNavItems = ["Breeds", "Organizations"];
  const rightNavItems = ["Sign Up", "Log In"];

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

  const onSearch = () => {
    if (params.location === "") {
      setNoLocation(true);
      return;
    }
    navigate({
      pathname: "/search",
      search: `?${createSearchParams(getSearchParams(params))}`,
    });
  };

  const onKeyEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (params.location === "") {
        setNoLocation(true);
        return;
      }
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(getSearchParams(params))}`,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.leftNavItems}>
          {leftNavItems.map((item, idx) => (
            <Link key={idx} to={`/${getPath(item)}`}>
              {item}
            </Link>
          ))}
        </div>
      </div>
      {location.pathname === "/search" && (
        <div onKeyDown={onKeyEnter}>
          <Search
            isSearchPage
            onClick={onSearch}
            size="small"
            icon="search"
            onChangeLocation={handleChangeLocation}
            onChangeSearch={handleChangeSearch}
            noLocation={noLocation}
          />
        </div>
      )}

      <div className={styles.rightWrapper}>
        {rightNavItems.map((item, idx) => (
          <Link key={idx} to={`/${getPath(item)}`}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};
