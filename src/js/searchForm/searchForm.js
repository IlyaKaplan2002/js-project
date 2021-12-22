import { Notify } from 'notiflix';
import { store } from '../store/store';
import { makeFilms } from '../main/makeFilms';
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
  makeFilms();
};

const addSearchFormListener = () => {
  document.forms.search.addEventListener('submit', onSearchSubmit);
};

const removeSearchFormListener = () => {
  document.forms.search.removeEventListener('submit', onSearchSubmit);
};

export { addSearchFormListener, removeSearchFormListener };
