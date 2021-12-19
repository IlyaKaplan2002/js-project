import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../base/store';
import { loader } from '../../base/reloader';

export const fetchQueueFilms = () => {
  const userId = store.auth.userId.replaceAll('"', '');
  loader();
  const url = `${FIREBASE_BASE_URL}queue/%22${userId}%22.json`;
  return axios.get(url).then(res => res.data);
};
