import { store } from '../base/store';
import { makeNavList } from './nav';

const logOut = () => {
  localStorage.setItem('isLoggedIn', JSON.stringify(false));
  localStorage.setItem('userId', JSON.stringify(''));
  store.auth.isLoggedIn = false;
  store.auth.userId = '';
  makeNavList();
};

export { logOut };
