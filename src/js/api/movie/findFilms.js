import axios from 'axios';
import { MOVIE_BASE_URL } from '../apiBaseURLs';
import { MOVIE_API } from '../apiKeys';

const findFilms = (query, page) => {
  const url = `${MOVIE_BASE_URL}search/movie?api_key=${MOVIE_API}&query=${query}&page=${page}`;
  return axios.get(url);
};

export { findFilms };
