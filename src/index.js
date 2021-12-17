import './sass/main.scss';

import { makeNavList } from './js/header/nav';

import { makeTrendingMovies } from './js/main/makeTrendingMovies';
import { modals } from './js/modalButton';
import { refs } from './js/base/refs';
import { onFilmsListClick } from './js/modalFilm/modalFilmAction';

makeNavList();

makeTrendingMovies();

modals({
  openButton: refs.trendingMovies,
  closeButton: refs.filmModal.filmModalCloseButton,
  backdrop: refs.filmModal.filmModalBackdrop,
});

refs.trendingMovies.addEventListener('click', onFilmsListClick);
