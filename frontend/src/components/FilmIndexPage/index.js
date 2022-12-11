import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms, getFilms } from "../../store/films";
import FilmIndexItem from "./FilmIndexItem";
import styles from "./films.module.scss";

function FilmIndexPage() {
  const dispatch = useDispatch();
  const films = useSelector(getFilms);
  // debugger;

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  const filmItems = films.map((film) => {
    // debugger;
    return <FilmIndexItem key={film.id} film={film} />;
  });

  return (
    <>
      <main className={`container`}>
        <header className={`${styles.shopHeader}`}>
          <div className={`${styles.headerText}`}>
            <h1>SHOP ALL Films</h1>
            <p>
              Browse our collection of the greatest films from around the world,
              available on disc, not streaming.
            </p>
          </div>
        </header>
        <div className={`container centered`}>
          <section className={`${styles.shopFilters}`}>
            <b>{filmItems.length}</b> Selections
          </section>
        </div>
        <div className={`container centered`}>
          <section className={`shopPadded`}>
            <table className={`${styles.shopTable}`}>
              <thead>
                <tr>
                  <th>Spine #</th>
                  <th></th>
                  <th>Title</th>
                  <th>Director</th>
                  <th>Year</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{filmItems}</tbody>
            </table>
          </section>
        </div>
      </main>
    </>
  );
}

export default FilmIndexPage;
