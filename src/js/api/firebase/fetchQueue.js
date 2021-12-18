import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../base/store';
import { loader } from '../../base/reloader';

export const fetchQueueFilms = () => {
  const userId = store.auth.userId;
  loader();
  return axios
    .get(`${FIREBASE_BASE_URL}/queue/${userId}.json`)
    .then(res => Object.values(res.data));
};
