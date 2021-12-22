import axios from 'axios';
import { MOVIE_API } from '../apiKeys';
import { MOVIE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../store/store';
import { preloader } from '../../utils/preloader';
import { makePagination } from '../../main/pagePagination';
export { fetchTrendingMovies };

function fetchTrendingMovies() {
  const page = store.movie.page;

  preloader();

  return axios
    .get(`${MOVIE_BASE_URL}trending/movie/day?api_key=${MOVIE_API}&page=${page}`)
    .then(res => {
      store.movie.totalPages = res.data.total_pages;
      makePagination();
      return res.data.results;
    });
}
