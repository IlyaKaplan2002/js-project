import { Notify } from 'notiflix';
import { fetchQueueFilms } from '../api/firebase/fetchQueue';
import { refs } from '../store/refs';
import { removeLoader } from '../utils/preloader';
import { filterLibFilms } from '../cards/filterLibFilms';
import { filterLibFilmsData } from '../cards/filterLibFilmsData';
import { renderMarkup } from '../cards/renderMarkup';
import { removePagination } from './pagePagination';

const makeQueue = () => {
  fetchQueueFilms()
    .then(filterLibFilms)
    .then(filterLibFilmsData)
    .then(renderMarkup)
    .catch(err => {
      console.log(err);
      removePagination();
      const errMessage = `There isn't queue films!`;
      Notify.failure(errMessage);
      refs.trendingMovies.innerHTML = `<p class='error'>${errMessage}</p>`;
    })
    .finally(() => removeLoader());
};

export { makeQueue };
