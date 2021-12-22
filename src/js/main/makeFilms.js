import { Notify } from 'notiflix';
import { findFilms } from '../api/movie/findFilms';
import { removeLoader } from '../utils/preloader';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { renderMarkup } from '../cards/renderMarkup';
import { makeTrendingMovies } from './makeTrendingMovies';

const makeFilms = () => {
  findFilms()
    .then(data => matchGenresAndFilter(data))
    .then(renderMarkup)
    .catch(err => {
      Notify.failure(err.message);
      makeTrendingMovies();
    })
    .finally(() => removeLoader());
};

export { makeFilms };
