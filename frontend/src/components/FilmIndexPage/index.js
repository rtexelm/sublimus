import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms, getFilms } from "../../store/films";
import "films.modal.scss";

function FilmIndexPage() {
  const dispatch = useDispatch();
  const films = useSelector(getFilms);

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  const filmItems = films.map((film) => {
    return <FilmIndexItem key={film.id} film={film} />;
  });

  return <>{filmItems}</>;
}

export default FilmIndexPage;
