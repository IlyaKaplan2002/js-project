import { Notify } from 'notiflix';
import { fetchTrendingMovies } from '../api/movie/fetchTrendingMovies';
import { removeLoader } from '../utils/preloader';
import { store } from '../store/store';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { renderMarkup } from '../cards/renderMarkup';

const makeTrendingMovies = page => {
  fetchTrendingMovies(page)
    .then(data => matchGenresAndFilter(data))
    .then(renderMarkup)
    .catch(err => Notify.failure(err.message))
    .finally(() => removeLoader());
  store.movie.query = '';
};

export { makeTrendingMovies };
