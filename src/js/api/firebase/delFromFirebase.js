import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../base/store';
import { loader } from '../../base/reloader';

export const delFromFirebase = (filmId, action) => {
  const userId = store.auth.userId.replaceAll('"', '');
  loader();
  return axios.delete(`${FIREBASE_BASE_URL}${action}/%22${userId}%22/${filmId}.json`);
};
