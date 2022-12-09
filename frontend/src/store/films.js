import csrfFetch from "./csrf";

const RECEIVE_FILMS = "films/receiveFilms";
const RECEIVE_FILM = "films/receiveFilm";

export const receiveFilms = (films) => ({
  type: RECEIVE_FILMS,
  payload: films,
});

export const receiveFilm = (film) => ({
  type: RECEIVE_FILM,
  payload: film,
});

export const getFilms = (state) =>
  state.films ? Object.values(state.films) : [];

export const getFilm = (filmId) => (state) =>
  state.films ? state.films[filmId] : {};

export const fetchFilms = () => async (dispatch) => {
  const res = await csrfFetch(`/api/films`);
  const data = await res.json();
  dispatch(receiveFilms(data));
  return res;
};

export const fetchFilm = (filmId) => async (dispatch) => {
  const res = await csrfFetch(`/api/films/${filmId}`);
  const data = await res.json();
  dispatch(receiveFilm(data));
  return res;
};

function filmsReducer(state = {}, action) {
  newState = { ...state };

  switch (action.type) {
    case RECEIVE_FILMS:
      return { ...newState, ...action.payload };
    case RECEIVE_FILM:
      const film = action.payload;
      return (newState[film.id] = film);
    default:
      return state;
  }
}

export default filmsReducer;
