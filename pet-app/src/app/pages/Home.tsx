import Search from "../components/Search/Search";

import hero from "../assets/dog-cat-hero.png";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <img src={hero} alt="hero" />
        <div className={styles.searchWrapper}>
          <Search />
        </div>
      </div>
    </div>
  );
};
