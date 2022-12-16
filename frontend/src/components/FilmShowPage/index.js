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
            <div className={`${styles.headerBox}`}>
              <p className={`${styles.showDirector}`}>{film.director}</p>
              <h1 className={`${styles.showTitle}`}>{film.title}</h1>
            </div>
            <div className={`${styles.description}`}>
              <div className={`${styles.info}`}>
                <p className={`${styles.infoHeader}`}>Film Info</p>
                <ul>
                  <li>{film.year}</li>
                  <li>Cypress</li>
                  <li>124 minutes</li>
                  <li>color</li>
                  <li>1.85:1</li>
                  <li>Italian</li>
                  <li>
                    <b>Spine #{film.id}</b>
                  </li>
                </ul>
              </div>
              <div className={`${styles.story}`}>
                <p>{film.description}</p>
                <p className={`${styles.features}`}>Special Features</p>
                <ul>
                  <li>
                    Restored high-definition digital transfer, with uncompressed
                    monaural soundtrack on the Blu-ray edition
                  </li>
                  <li>
                    Audio commentary by film scholars Peter Brunette and Frank
                    Burke
                  </li>
                  <li>Deleted scene</li>
                  <li>Interview with star Magali Noël</li>
                  <li>
                    Archival audio interviews of Fellini and his friends and
                    family, by critic Gideon Bachmann
                  </li>
                </ul>
              </div>
            </div>
            <p className={`${styles.showPlaceholder}`}></p>
            <Link className={`${styles.showReturn}`} to="/films">
              <b>Return to Films</b>
            </Link>
          </article>
          <article className={`${styles.right}`}>
            <img className={`${styles.showImg}`} src={imgUrl} alt="" />
            <div className={`${styles.showPlaceholder}`}>
              <p className={`${styles.button}`}>DVD: ${film.price}</p>
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
