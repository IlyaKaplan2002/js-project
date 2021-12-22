import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../store/store';
import { preloader } from '../../utils/preloader';

export const sendToLibrary = async (film, option) => {
  const userId = store.auth.userId.replaceAll('"', '');
  preloader();
  const filmId = film.id;
  const url = `${FIREBASE_BASE_URL}${option}/%22${userId}%22.json`;
  const isIn = await axios
    .get(url)
    .then(res => res.data)
    .then(data => {
      const films = Object.values(data);
      const ids = films.map(film => film.id);
      return ids.includes(filmId);
    })
    .catch(() => false);

  const post = isIn ? await axios.get(url) : await axios.post(url, film);
  return post;
};
