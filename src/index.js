import './sass/main.scss';

import { makeNavList } from './js/header/nav';

import { makeTrendingMovies } from './js/main/makeTrendingMovies';

import { onFilmsListClick } from './js/modalFilm/modalFilmAction';
import { modals } from './js/modals';
import { refs } from './js/base/refs';
import { removeLoader } from './js/base/reloader';
import { checkTheme, onThemeInput } from './js/main/themes';
import { onAddAction } from './js/modalFilm/addAction';
import { checkButtons } from './js/modalFilm/checkButtons';

window.onload = removeLoader;

makeNavList();

makeTrendingMovies();

modals({
  openButton: refs.trendingMovies,
  closeButton: refs.filmModal.filmModalCloseButton,
  backdrop: refs.filmModal.filmModalBackdrop,
});

refs.trendingMovies.addEventListener('click', onFilmsListClick);
modals(refs.modalStudents);

refs.themeCheckbox.addEventListener('input', onThemeInput);

checkTheme();

refs.filmModal.filmModalButtons.addEventListener('click', onAddAction);

checkButtons();
