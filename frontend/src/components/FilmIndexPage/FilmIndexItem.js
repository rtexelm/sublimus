import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./films.module.scss";

function FilmIndexItem({ film }) {
  const { id, title, director, year, price } = film;
  const history = useHistory();

  return (
    <tr onClick={(e) => history.push(`films/${film.id}`)}>
      <td className={`${styles.tableSpine}`}>{id}</td>
      <td className={`${styles.tableImg}`}>
        <img
          src="https://s3.amazonaws.com/criterion-production/films/b41a9467bc7a3534c01ba037c019005c/L5fZBJQOnY606k47INf8z9f5ecBFn3_thumbnail.jpg"
          alt="Grand Illusion"
        />
      </td>
      <td className={`${styles.tableTitle}`}>{title}</td>
      <td className={`${styles.tableDirector}`}>{director}</td>
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
