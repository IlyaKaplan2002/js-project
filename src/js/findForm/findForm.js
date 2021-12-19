import { Notify } from 'notiflix';
import { findFilms } from '../api/movie/findFilms';
import { removeLoader } from '../base/reloader';
import { store } from '../base/store';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { renderMarkup } from '../cards/renderMarkup';
import { makeTrendingMovies } from '../main/makeTrendingMovies';

const onSearchSubmit = e => {
  e.preventDefault();
  const inputValue = document.forms.search.elements.query.value;
  store.movie.page = 1;
  store.movie.query = inputValue;
  if (!inputValue) {
    Notify.failure('Empty query!');
    makeTrendingMovies();
    return;
  }
  findFilms()
    .then(data => matchGenresAndFilter(data))
    .then(renderMarkup)
    .catch(err => {
      Notify.failure(err.message);
    })
    .finally(() => removeLoader());
};

const addSearchFormListener = () => {
  document.forms.search.addEventListener('submit', onSearchSubmit);
};

const removeSearchFormListener = () => {
  document.forms.search.removeEventListener('submit', onSearchSubmit);
};

export { addSearchFormListener, removeSearchFormListener };
