import './sass/main.scss';
import './js/base/reloader';

import { makeNavList } from './js/header/nav';

import { makeTrendingMovies } from './js/main/makeTrendingMovies';

makeNavList();

makeTrendingMovies();
