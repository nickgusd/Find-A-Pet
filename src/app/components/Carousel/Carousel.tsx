import { useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import styles from "./styles.module.css";

export const Carousel = ({ photos }: any) => {
  const [index, setIndex] = useState(0);
  const handleClickRight = (e: any) => {
    if (index === photos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleClickLeft = (e: any) => {
    if (index === 0) {
      setIndex(photos.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className={styles.container}>
      {photos.length > 1 ? (
        <>
          <img src={photos[index]?.full} alt="cat" />
          <FiChevronLeft className={styles.left} onClick={handleClickLeft} />
          <FiChevronRight className={styles.right} onClick={handleClickRight} />
        </>
      ) : (
        <img src={photos[0].full} alt="cat" />
      )}
    </div>
  );
};
