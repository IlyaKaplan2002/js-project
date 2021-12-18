import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../base/store';
import { loader } from '../../base/reloader';

export const delQueueFilms = ({Id}) => {
  const userId = store.auth.userId;
  loader();
  return axios.delete(`${FIREBASE_BASE_URL}/queue/${userId}/${Id}.json`);
};