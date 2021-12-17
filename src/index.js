import './sass/main.scss';

import { makeNavList } from './js/header/nav';

import { makeTrendingMovies } from './js/main/makeTrendingMovies';
import { fetchQueueFilms } from './js/api/firebase/fetchQueue';
makeNavList();

makeTrendingMovies();
console.log(fetchQueueFilms());