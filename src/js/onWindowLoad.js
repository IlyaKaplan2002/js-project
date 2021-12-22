import { refs } from './store/refs';
import { removeLoader } from './utils/preloader';
import { handleScroll } from './utils/handleScroll';
import { makeTrendingMovies } from './main/makeTrendingMovies';
import { checkTheme, onThemeInput } from './main/themes';
import { onAddAction } from './modalFilm/addAction';
import { checkButtons } from './modalFilm/checkButtons';
import { onFilmsListClick } from './modalFilm/modalFilmAction';
import { modals } from './utils/modals';
import { scrollUp } from './utils/scrollUp';
import { makeNavList } from './header/nav';

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
