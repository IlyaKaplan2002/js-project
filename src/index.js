import './sass/main.scss';

import { makeNavList } from './js/header/nav';

import { fetchTrendingMovies } from './js/api/movie/fetchTrendingMovies';
import { matchGenresAndFilter } from './js/cards/matchGenres';
import { renderMarkup } from './js/cards/renderMarkup';
import {onOpenModalStudents} from './js/modalStudents';
import { makeTrendingMovies } from './js/main/makeTrendingMovies';

makeNavList();

makeTrendingMovies();
