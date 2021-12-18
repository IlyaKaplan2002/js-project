import axios from 'axios';
import { loader } from '../../base/reloader';
import { MOVIE_BASE_URL } from '../apiBaseURLs';
import { MOVIE_API } from '../apiKeys';

const fetchOneMovie = id => {
  const url = `${MOVIE_BASE_URL}movie/${id}?api_key=${MOVIE_API}`;
  loader();

  return axios.get(url).then(res => [res.data]);
};

export { fetchOneMovie };
