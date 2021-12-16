import { findFilms } from '../api/movie/findFilms';
import { store } from '../base/store';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { renderMarkup } from '../cards/renderMarkup';

const onSearchSubmit = e => {
  e.preventDefault();
  const inputValue = document.forms.search.elements.query.value;
  store.movie.page = 1;
  store.movie.query = inputValue;
  findFilms().then(matchGenresAndFilter).then(renderMarkup).catch(console.dir);
};

const addSearchFormListener = () => {
  document.forms.search.addEventListener('submit', onSearchSubmit);
};

const removeSearchFormListener = () => {
  document.forms.search.removeEventListener('submit', onSearchSubmit);
};

export { addSearchFormListener, removeSearchFormListener };
