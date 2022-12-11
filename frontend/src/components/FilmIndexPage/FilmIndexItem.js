import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./films.module.scss";

function FilmIndexItem({ film }) {
  const { id, title, director, year, price } = film;

  return (
    <tr>
      <td>{id}</td>
      <td></td>
      <td className={`${styles.tableTitle}`}>
        <Link to={`films/${film.id}`}>{title}</Link>
      </td>
      <td>{director}</td>
      <td>{year}</td>
      <td>{price}</td>
    </tr>

    // <div className={styles.indexItem}>
    // <Link to={`films/${film.id}`}>
    //   <h2>{title}</h2>
    // </Link>
    //   <ul>
    //     <li>{year}</li>
    //     {/* <li>Directed by {director}</li> */}
    //     <li>price: ${price}</li>
    //   </ul>
    //   <br />
    // </div>
  );
}

export default FilmIndexItem;
