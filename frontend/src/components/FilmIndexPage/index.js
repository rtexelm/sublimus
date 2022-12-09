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
  }, []);

  const filmItems = films.map((film) => {
    // debugger;
    return <FilmIndexItem key={film.id} film={film} />;
  });

  return <>{filmItems}</>;
}

export default FilmIndexPage;
