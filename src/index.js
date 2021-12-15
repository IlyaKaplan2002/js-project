import './sass/main.scss';

import { makeNavList } from './js/header/nav';

import { fetchTrendingMovies } from './js/api/fetchTrendingMovies';
import { matchGenresAndFilter } from './js/cards/matchGenres';
import { renderMarkup } from './js/cards/renderMarkup';

makeNavList();

fetchTrendingMovies().then(matchGenresAndFilter).then(renderMarkup);
