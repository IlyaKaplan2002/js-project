import { fetchTrendingMovies } from '../api/movie/fetchTrendingMovies';
import { store } from '../base/store';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { renderMarkup } from '../cards/renderMarkup';

const makeTrendingMovies = page => {
  fetchTrendingMovies(page).then(matchGenresAndFilter).then(renderMarkup);
  store.movie.query = '';
};

export { makeTrendingMovies };
