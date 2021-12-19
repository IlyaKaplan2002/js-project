import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../base/store';
import { loader } from '../../base/reloader';
import { makePagination } from '../../main/pagePagination';

export const fetchWatchedFilms = () => {
  const userId = store.auth.userId.replaceAll('"', '');
  loader();
  const url = `${FIREBASE_BASE_URL}watched/%22${userId}%22.json`;
  return axios.get(url).then(res => {
    const data = res.data;
    if (data) {
      store.movie.totalPages = Math.ceil(data.length / 20);
    } else {
      store.movie.totalPages = 0;
    }
    makePagination();
    return data;
  });
};
