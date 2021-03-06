import axios from 'axios';
import { preloader } from '../../utils/preloader';
import { FIREBASE_AUTH_BASE_URL } from '../apiBaseURLs';
import { FIREBASE_API } from '../apiKeys';

const logInFetch = ({ email, password }) => {
  const url = `${FIREBASE_AUTH_BASE_URL}signInWithPassword?key=${FIREBASE_API}`;

  preloader();

  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};

const signUpFetch = ({ email, password }) => {
  const url = `${FIREBASE_AUTH_BASE_URL}signUp?key=${FIREBASE_API}`;

  preloader();

  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};

export { logInFetch, signUpFetch };
