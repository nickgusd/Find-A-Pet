import { Link, createSearchParams, useLocation } from "react-router-dom";
import { getSearchTypes } from "../../utils/animals";

import styles from "./styles.module.css";

export const List = ({ onMouseLeave }: any) => {
  const location = useLocation();
  const animals = ["Dogs", "Cats", "Rabbits", "Horses", "Birds", "Other"];
  const isSearch = location.pathname === "/search" ? styles.searchWrapper : "";
  return (
    <div
      className={`${styles.wrapper} ${isSearch}`}
      onMouseLeave={onMouseLeave}
    >
      {animals.map((item, idx) => (
        <Link
          to={`/search?${createSearchParams(getSearchTypes(item))}`}
          key={idx}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};
