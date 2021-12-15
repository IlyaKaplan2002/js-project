import axios from 'axios';
import { MOVIE_API } from './apiKeys';
import { MOVIE_BASE_URL } from './apiBaseURLs';
import { store } from '../base/store';

export { fetchTrendingMovies };

function fetchTrendingMovies(page = 1) {
  return axios
    .get(`${MOVIE_BASE_URL}trending/movie/day?api_key=${MOVIE_API}&page=${page}`)
    .then(res => {
      store.movie.totalPages = res.data.total_pages;
      return res.data.results;
    });
}
