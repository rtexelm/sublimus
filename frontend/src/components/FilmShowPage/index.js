import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "film.module.scss";
import { useParams } from "react-router-dom";
import { fetchFilm, getFilm } from "../../store/films";

function FilmShowPage() {
  const dispatch = useDispatch();
  const { filmId } = useParams();
  film = useSelector(getFilm(filmId));

  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [filmId]);

  return (
    <>
      <h2>{film.title}</h2>
      <p>{film.year}</p>
      <p>{film.director}</p>
      <p>{film.description}</p>
      <p>{film.price}</p>
    </>
  );
}

export default FilmShowPage;
