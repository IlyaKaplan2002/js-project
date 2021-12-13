import axios from 'axios';
import { FIREBASE_AUTH_BASE_URL } from '../apiBaseURLs';
import { FIREBASE_API } from '../apiKeys';

const signIn = ({ email, password }) => {
  const url = `${FIREBASE_AUTH_BASE_URL}signInWithPassword?key=${FIREBASE_API}`;

  return axios.post(url, {
    body: {
      email,
      password,
      returnSecureToken: true,
    },
  });
};

const signUp = ({ email, password }) => {
  const url = `${FIREBASE_AUTH_BASE_URL}signUp?key=${FIREBASE_API}`;

  return axios.post(url, {
    body: {
      email,
      password,
      returnSecureToken: true,
    },
  });
};

export { signIn, signUp };
