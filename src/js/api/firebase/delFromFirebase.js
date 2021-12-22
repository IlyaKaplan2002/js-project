import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../store/store';
import { preloader } from '../../utils/preloader';

export const delFromFirebase = (filmId, action) => {
  const userId = store.auth.userId.replaceAll('"', '');
  preloader();
  return axios.delete(`${FIREBASE_BASE_URL}${action}/%22${userId}%22/${filmId}.json`);
};
