import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../base/store';

export const fetchQueueFilms = () => {
  const userId = store.auth.userId;
  return axios.get(`${FIREBASE_BASE_URL}/${userId}/queue.json`);
};