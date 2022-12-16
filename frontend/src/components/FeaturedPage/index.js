import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms, getFilms } from "../../store/films";
import { images } from "./imgUrls";
import styles from "./featured.module.scss";

function FeaturedPage() {
  const dispatch = useDispatch();
  const films = useSelector(getFilms);
  const sliced = Object.values(films)
    .map((value) => value)
    .slice(5, 9);
  const randomIndex = () => Math.floor(Math.random() * 23) + 1;
  // const imgUrl = images[randomIndex()];

  console.log(sliced);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <div className={`container ${styles.fullPage}`}>
      <h1>Shop the Selections</h1>
      <div className={`${styles.featuredBoxes}`}>
        <div className={`${styles.featuredBox}`}>
          <h3>All Films</h3>
          <img src={images[randomIndex()]} />
          <p>Shop the entire Selections</p>
        </div>
        <div className={`${styles.featuredBox}`}>
          <h3>The Same Films</h3>
          <img src={images[randomIndex()]} />
          <p>Our latest editions</p>
        </div>
        <div className={`${styles.featuredBox}`}>
          <h3>Buy These</h3>
          <img src={images[randomIndex()]} />
          <p>All the same films in these links</p>
        </div>
        <div className={`${styles.featuredBox}`}>
          <h3>Last Chance!</h3>
          <img src={images[randomIndex()]} />
          <p>No surprises here</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPage;
