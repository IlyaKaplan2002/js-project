import { fetchTrendingMovies } from '../api/movie/fetchTrendingMovies';
import { removeLoader } from '../base/reloader';
import { store } from '../base/store';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { renderMarkup } from '../cards/renderMarkup';

const makeTrendingMovies = page => {
  fetchTrendingMovies(page).then((data) => {
    removeLoader()
   return matchGenresAndFilter(data)

  }).then(renderMarkup);
  store.movie.query = '';
};

export { makeTrendingMovies };
