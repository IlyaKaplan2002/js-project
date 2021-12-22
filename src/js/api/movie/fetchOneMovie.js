import axios from 'axios';
import { preloader } from '../../utils/preloader';
import { MOVIE_BASE_URL } from '../apiBaseURLs';
import { MOVIE_API } from '../apiKeys';

const fetchOneMovie = id => {
  const url = `${MOVIE_BASE_URL}movie/${id}?api_key=${MOVIE_API}`;
  preloader();

  return axios.get(url).then(res => [res.data]);
};

export { fetchOneMovie };
