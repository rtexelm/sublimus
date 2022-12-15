import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchFilm, getFilm } from "../../store/films";
import { images } from "./imgUrls";
import AddItemButton from "./AddItemButton";
import styles from "./film.module.scss";

function FilmShowPage() {
  const dispatch = useDispatch();
  const { filmId } = useParams();
  const film = useSelector(getFilm(filmId));
  const imgUrl = images[filmId];

  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [filmId, dispatch]);

  // console.log(imgUrl);

  return (
    <>
      <div className={`container centered`}>
        {/* <div className=`}> */}
        <section className={`${styles.content}`}>
          <article className={`${styles.details}`}>
            <p className={`${styles.showPlaceholder}`}>
              <span className={`${styles.showDirector}`}>{film.director}</span>
            </p>
            <h1 className={`${styles.showTitle}`}>{film.title}</h1>
            <p className={`${styles.showPlaceholder}`}>{film.description}</p>
            <p className={`${styles.showPlaceholder}`}>{film.year}</p>
            <p className={`${styles.showPlaceholder}`}></p>
            <p className={`${styles.showPlaceholder}`}></p>
            <Link className={`${styles.showReturn}`} to="/films">
              <b>Return to Films</b>
            </Link>
          </article>
          <article className={`${styles.right}`}>
            <img className={`${styles.showImg}`} src={imgUrl} alt="" />
            <div className={`${styles.showPlaceholder}`}>
              MSRP: ${film.price}
            </div>
            <div className={`${styles.showPlaceholder}`}>
              <AddItemButton film={film} />
            </div>
            <div className={`${styles.showPlaceholder}`}></div>
          </article>
        </section>
      </div>
    </>
  );
}

export default FilmShowPage;
