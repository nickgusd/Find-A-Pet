/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getOrganizations } from "../slice/organizationsSlice";
import {
  selectOrganizations,
  loadingOrganizations,
} from "../slice/organizationsSlice";

import { ContactCard } from "../components/ContactCard/ContactCard";
import LoaderComponent from "../components/Loader/Loader";

import styles from "./Organizations.module.css";

export const Organizations = () => {
  const dispatch = useAppDispatch();
  const selectOrgs = useAppSelector(selectOrganizations);
  const loadingOrgs = useAppSelector(loadingOrganizations);
  const { organizations } = selectOrgs;
  const isLoading = loadingOrgs === "loading";

  useEffect(() => {
    dispatch(getOrganizations(`https://api.petfinder.com/v2/organizations`));
  }, []);

  return (
    <div className={styles.container}>
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
        </>
      )}
    </div>
  );
};
