import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchFilm, getFilm } from "../../store/films";
import styles from "./film.module.scss";

function FilmShowPage() {
  const dispatch = useDispatch();
  const { filmId } = useParams();
  const film = useSelector(getFilm(filmId));

  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [filmId, dispatch]);

  return (
    <>
      <h2>{film.title}</h2>
      <p>{film.year}</p>
      <p>{film.director}</p>
      <p>{film.description}</p>
      <p>{film.price}</p>
      <Link to="/films">
        <b>Return to Films</b>
      </Link>
    </>
  );
}

export default FilmShowPage;
