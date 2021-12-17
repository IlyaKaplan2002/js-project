import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../base/store';

export const sendToLibrary = (film, option) => {
  const userId = store.auth.userId;
  return axios.post(`${FIREBASE_BASE_URL}${option}/${userId}.json`, film);
};
