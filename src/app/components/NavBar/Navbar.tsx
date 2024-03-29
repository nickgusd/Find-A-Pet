/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  Link,
  useLocation,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useMediaQuery } from "react-responsive";

import logo from "../../assets/high-res-logo.svg";
import { BsFillHeartFill } from "react-icons/bs";
import { getSearchParams } from "../../utils/search";
import { getPath } from "../../utils/string";
import Search from "../Search/Search";
import { List } from "../List/List";
import { FiMenu } from "react-icons/fi";
import { MobileNav } from "../MobileNav/MobileNav";
import { isMobileNav, setMobileNav } from "../../slice/animalsSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";

import styles from "./styles.module.css";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [noLocation, setNoLocation] = useState(false);
  const [mouse, setMouse] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const mobileNav = useAppSelector(isMobileNav);
  const mobileFixedNavLocations = ["/search", "/organizations", "/favorites"]
  const mobileStyle = isMobile ? styles.containerMobileHome : ""
  
  const params = {
    type: searchValue,
    location: locationValue,
    page: "1",
  };

  useEffect(() => {
    setNoLocation(false);
  }, [location.pathname]);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleRedirect = () => {
    if (
      location.pathname.includes("/cat") ||
      location.pathname.includes("/dog")
    ) {
      return window.location.origin;
    } else {
      return (
        window.location.origin +
        window.location.pathname +
        window.location.search
      );
    }
  };

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: handleRedirect(),
      },
    });

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
    if (locationValue === "") {
      setNoLocation(true);
      return;
    } else {
      setNoLocation(false);
    }
    navigate({
      pathname: "/search",
      search: `?${createSearchParams(getSearchParams(params))}`,
    });
  };

  const onKeyEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (locationValue === "") {
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

  const handleMouseOver = () => {
    setMouse(true);
  };

  const handleMouseLeave = () => {
    setMouse(false);
  };

  return (
    <div
      className={`${styles.container} ${
        isMobile && mobileFixedNavLocations.includes(location.pathname) ? styles.containerMobile : ""
      } ${mobileStyle}`}
    >
      {!isMobile && (
        <>
          <div className={styles.leftWrapper}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className={styles.leftNavItems}>
              <Link to={`/${getPath("Organizations")}`}>Organizations</Link>
              <div className={styles.animals} onMouseEnter={handleMouseOver}>
                Animals
                {mouse && <List onMouseLeave={handleMouseLeave} />}
              </div>
            </div>
          </div>
          {location.pathname === "/search" && (
            <div onKeyDown={onKeyEnter}>
              <Search
                isMobile={false}
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
            <BsFillHeartFill
              onClick={
                !isAuthenticated
                  ? () => {
                      loginWithRedirect({
                        appState: {
                          returnTo:
                            window.location.pathname + window.location.search,
                        },
                      });
                    }
                  : () => navigate("/favorites")
              }
            />
            <span />
            {!isAuthenticated && (
              <div
                onClick={() =>
                  loginWithRedirect({
                    appState: {
                      returnTo:
                        window.location.pathname + window.location.search,
                    },
                  })
                }
              >
                Log In
              </div>
            )}
            {isAuthenticated && (
              <div onClick={() => logoutWithRedirect()}>Log Out</div>
            )}
          </div>
        </>
      )}
      {isMobile && !mobileNav && (
        <>
          <div className={styles.leftWrapperMobile}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.rightWrapperMobile}>
            <FiMenu
              color="#525252"
              onClick={() => dispatch(setMobileNav(true))}
            />
          </div>
        </>
      )}
      {mobileNav && (
        <MobileNav
          loginWithRedirect={loginWithRedirect}
          logoutWithRedirect={logoutWithRedirect}
          isAuthenticated={isAuthenticated}
        />
      )}
    </div>
  );
};
