import './sass/main.scss';

import { makeNavList } from './js/header/nav';

import { makeTrendingMovies } from './js/main/makeTrendingMovies';

import { handleScroll, scrollToTop } from './js/scroll-up';

makeNavList();

makeTrendingMovies();