import { Notify } from 'notiflix';
import { fetchWatchedFilms } from '../api/firebase/fetchWatched';
import { refs } from '../base/refs';
import { removeLoader } from '../base/reloader';
import { filterLibFilms } from '../cards/filterLibFilms';
import { filterLibFilmsData } from '../cards/filterLibFilmsData';
import { renderMarkup } from '../cards/renderMarkup';
import { removePagination } from './pagePagination';

const makeWatched = () => {
  fetchWatchedFilms()
    .then(filterLibFilms)
    .then(filterLibFilmsData)
    .then(renderMarkup)
    .catch(err => {
      console.log(err);
      removePagination();
      const errMessage = `There isn't watched films!`;
      Notify.failure(errMessage);
      refs.trendingMovies.innerHTML = `<p class='error'>${errMessage}</p>`;
    })
    .finally(() => removeLoader());
};

export { makeWatched };
