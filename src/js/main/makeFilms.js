import { Notify } from 'notiflix';
import { findFilms } from '../api/movie/findFilms';
import { removeLoader } from '../base/reloader';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { renderMarkup } from '../cards/renderMarkup';

const makeFilms = () => {
  findFilms()
    .then(data => matchGenresAndFilter(data))
    .then(renderMarkup)
    .catch(err => {
      Notify.failure(err.message);
    })
    .finally(() => removeLoader());
};

export { makeFilms };
