import { store } from '../base/store';
import { makeTrendingMovies } from '../main/makeTrendingMovies';
import { makeNavList } from './nav';

const logOut = () => {
  localStorage.setItem('isLoggedIn', JSON.stringify(false));
  localStorage.setItem('userId', JSON.stringify(''));
  store.auth.isLoggedIn = false;
  store.auth.userId = '';
  store.movie.page = 1;
  store.movie.query = '';
  makeNavList();
  makeTrendingMovies();
};

export { logOut };
