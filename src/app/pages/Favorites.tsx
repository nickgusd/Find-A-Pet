/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth0 } from "@auth0/auth0-react";

import API from "../api/favoritesAPI";
import { AnimalCard } from "../components/AnimalCard/AnimalCard";

import styles from "./Favorites.module.css";
import { NoResults } from "../components/NoResults/NoResults";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const mobileStyle = isMobile ? styles.containerMobile : "";
  const { user = {}, isAuthenticated } = useAuth0();
  

  useEffect(() => {
    if (user.sub) {
      API.getFavorites({ userId: user?.sub })
        .then((res) => {
          const { data } = res;
          setFavorites(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [deleted, isAuthenticated, user]);

  const handleClose = (e: any, id: string) => {
    e.preventDefault();
    API.deleteFavorite(id)
      .then(() => {
        setDeleted(!deleted);
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div className={`${styles.container} ${mobileStyle}`}>
      <div className={styles.header}>
        <h1>Favorites</h1>
      </div>
      {favorites.length === 0 && !isLoading && (
        <NoResults
          header="No favorites found"
          content="You need to add favorites for them to appear on this page!"
        />
      )}
      {favorites.length > 0 && (
        <div className={styles.grid}>
          {favorites?.map((item: any) => (
            <AnimalCard
              key={item._id}
              id={item.petId}
              favorite={() => null}
              type={item.type}
              name={item.name}
              src={item.image}
              breed={item.breed}
              age={item.age}
              onClick={null}
              organizationId={item.organizationId}
              distance={item?.distance?.toFixed(2)}
              isSearchPage={false}
              onClose={(e: any) => handleClose(e, item._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
