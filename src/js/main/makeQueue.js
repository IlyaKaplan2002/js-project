import { Notify } from 'notiflix';
import { fetchQueueFilms } from '../api/firebase/fetchQueue';
import { refs } from '../base/refs';
import { removeLoader } from '../base/reloader';
import { filterLibFilms } from '../cards/filterLibFilms';
import { renderMarkup } from '../cards/renderMarkup';

const makeQueue = () => {
  fetchQueueFilms()
    .then(data => {
      removeLoader();
      return filterLibFilms(data);
    })
    .then(renderMarkup)
    .catch(() => {
      const errMessage = `There isn't queue films!`;
      Notify.failure(errMessage);
      refs.trendingMovies.innerHTML = `<p class='error'>${errMessage}</p>`;
    });
};

export { makeQueue };
