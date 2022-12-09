import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFilm } from "../../store/films";
import styles from "./films.module.scss";

function FilmIndexItem({ film }) {
  const { title, director, year, price } = film;

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
