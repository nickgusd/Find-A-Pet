import { Link, createSearchParams } from "react-router-dom";
import { getSearchTypes } from "../../utils/animals";

import styles from "./styles.module.css";

export const List = ({ onMouseLeave }: any) => {
  const animals = ["Dogs", "Cats", "Rabbits", "Horses", "Birds", "Other"];
  return (
    <div className={styles.wrapper} onMouseLeave={onMouseLeave}>
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
