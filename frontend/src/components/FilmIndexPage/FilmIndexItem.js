import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./films.module.scss";

function FilmIndexItem({ film }) {
  const { title, year, price } = film;

  return (
    <div className={styles.indexItem}>
      <Link to={`films/${film.id}`}>
        <h2>{title}</h2>
      </Link>
      <ul>
        <li>{year}</li>
        {/* <li>Directed by {director}</li> */}
        <li>price: ${price}</li>
      </ul>
      <br />
    </div>
  );
}

export default FilmIndexItem;
