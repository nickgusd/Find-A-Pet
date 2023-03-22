/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getOrganizations } from "../slice/organizationsSlice";
import queryString from "query-string";
import {
  selectOrganizations,
  loadingOrganizations,
} from "../slice/organizationsSlice";

import { ContactCard } from "../components/ContactCard/ContactCard";
import LoaderComponent from "../components/Loader/Loader";
import PaginationComponent from "../components/PaginationComponent/Pagination";

import styles from "./Organizations.module.css";

export const Organizations = () => {
  const dispatch = useAppDispatch();
  const selectOrgs = useAppSelector(selectOrganizations);
  const loadingOrgs = useAppSelector(loadingOrganizations);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const params = queryString.parse(location.search);
  const { organizations, pagination } = selectOrgs;
  const isLoading = loadingOrgs === "loading";
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const mobileStyle = isTabletOrMobile ? styles.containerMobile : "";

  useEffect(() => {
    dispatch(
      getOrganizations(
        `https://api.petfinder.com/v2/organizations${location.search}`
      )
    );
  }, [location.search]);

  const onPageChange = (e: any, { activePage }: any): void => {
    setPage(activePage);
    navigate({
      pathname: "/organizations",
      search: `?${createSearchParams({
        ...params,
        page: activePage,
      })}`,
    });
  };

  return (
    <div className={`${styles.container} ${mobileStyle}`}>
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <LoaderComponent />
        </div>
      )}
      {organizations && !isLoading && (
        <>
          <h1> Rescue Organizations</h1>
          <div className={styles.orgsGrid}>
            {organizations.map((item: any) => (
              <ContactCard org={item} key={item.id} />
            ))}
          </div>
          <div className={styles.pagination}>
            <PaginationComponent
              totalPages={pagination.total_pages}
              onChange={onPageChange}
              activePage={page}
            />
          </div>
        </>
      )}
    </div>
  );
};
