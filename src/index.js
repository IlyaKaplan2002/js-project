import './sass/main.scss';

import { makeNavList } from './js/header/nav';

import { makeTrendingMovies } from './js/main/makeTrendingMovies';
import { modals } from './js/modalButton';
import { refs } from './js/base/refs';

makeNavList();

makeTrendingMovies();

modals(refs.modalStudents);
