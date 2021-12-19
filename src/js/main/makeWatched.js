import { Notify } from 'notiflix';
import { fetchWatchedFilms } from '../api/firebase/fetchWatched';
import { refs } from '../base/refs';
import { removeLoader } from '../base/reloader';
import { filterLibFilms } from '../cards/filterLibFilms';
import { renderMarkup } from '../cards/renderMarkup';

const makeWatched = () => {
  fetchWatchedFilms()
    .then(data => {
      removeLoader();
      return filterLibFilms(data);
    })
    .then(renderMarkup)
    .catch(() => {
      const errMessage = `There isn't watched films!`;
      Notify.failure(errMessage);
      refs.trendingMovies.innerHTML = `<p class='error'>${errMessage}</p>`;
    });
};

export { makeWatched };
