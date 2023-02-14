import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks";
import { getOrganizations } from "../slice/organizationsSlice";
import { selectOrganizations } from "../slice/organizationsSlice";
import { ContactCard } from "../components/ContactCard/ContactCard";

import styles from "./Organizations.module.css";

export const Organizations = () => {
  const dispatch = useAppDispatch();
  const selectOrgs = useAppSelector(selectOrganizations);
  const { organizations } = selectOrgs;

  useEffect(() => {
    dispatch(getOrganizations(`https://api.petfinder.com/v2/organizations`));
  }, []);

  return (
    <div>
      <h1>Organizations</h1>
      {organizations && (
        <div className={styles.orgsGrid}>
          {organizations.map((item: any) => (
            <div key={item.id}>
              <ContactCard org={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
