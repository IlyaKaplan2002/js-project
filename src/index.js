import { makeNavList } from './js/header/nav';
import './sass/main.scss';

makeNavList();

import { fetchTrendingMovies } from './js/api/fetchTrendingMovies';
import FetchMovieGenres from './js/api/fetchTrendingMovies';
import { renderMarkup } from './js/renderMarkup';

fetchTrendingMovies();
// renderMarkup();

const fetchMovieGenres = new FetchMovieGenres();
console.log(fetchMovieGenres);