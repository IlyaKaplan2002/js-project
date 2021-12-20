import { refs } from './base/refs';
import { removeLoader } from './base/reloader';
import { handleScroll } from './handleScroll';
import { makeNavList } from './header/nav';
import { makeTrendingMovies } from './main/makeTrendingMovies';
import { checkTheme, onThemeInput } from './main/themes';
import { onAddAction } from './modalFilm/addAction';
import { checkButtons } from './modalFilm/checkButtons';
import { onFilmsListClick } from './modalFilm/modalFilmAction';
import { modals } from './modals';
import { scrollUp } from './scrollUp';

const onWindowLoad = () => {
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

  refs.scrollToTopBtn.addEventListener('click', scrollUp);

  document.addEventListener('scroll', handleScroll);
};

export { onWindowLoad };
