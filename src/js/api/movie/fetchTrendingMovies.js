import axios from 'axios';
import { MOVIE_API } from '../apiKeys';
import { MOVIE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../base/store';
import { loader } from '../../base/reloader';
import { makePagination } from '../../main/pagePagination';
export { fetchTrendingMovies };

function fetchTrendingMovies() {
  const page = store.movie.page;

  loader();

  return axios
    .get(`${MOVIE_BASE_URL}trending/movie/day?api_key=${MOVIE_API}&page=${page}`)
    .then(res => {
      store.movie.totalPages = res.data.total_pages;
      makePagination();
      return res.data.results;
    });
}
