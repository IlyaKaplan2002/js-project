import axios from 'axios';
import { loader } from '../../base/reloader';
import { store } from '../../base/store';
import { makePagination } from '../../main/pagePagination';
import { MOVIE_BASE_URL } from '../apiBaseURLs';
import { MOVIE_API } from '../apiKeys';

const findFilms = () => {
  const page = store.movie.page;
  const query = store.movie.query;
  const url = `${MOVIE_BASE_URL}search/movie?api_key=${MOVIE_API}&query=${query}&page=${page}`;
  loader();
  return axios.get(url).then(res => {
    store.movie.totalPages = res.data.total_pages;
    makePagination();
    return res.data.results;
  });
};

export { findFilms };
