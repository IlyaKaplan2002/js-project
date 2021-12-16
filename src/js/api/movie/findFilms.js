import axios from 'axios';
import { store } from '../../base/store';
import { MOVIE_BASE_URL } from '../apiBaseURLs';
import { MOVIE_API } from '../apiKeys';

const findFilms = (page = 1) => {
  const query = store.movie.query;
  const url = `${MOVIE_BASE_URL}search/movie?api_key=${MOVIE_API}&query=${query}&page=${page}`;
  return axios.get(url).then(res => {
    store.movie.totalPages = res.data.total_pages;
    return res.data.results;
  });
};

export { findFilms };
