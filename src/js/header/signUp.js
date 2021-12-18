import { signUpFetch } from '../api/auth/authAPI';
import { closeAuthModal, openAuthModal } from './authModal';
import { refs } from '../base/refs';
import { store } from '../base/store';
import { makeNavList } from './nav';
import { Notify } from 'notiflix';
import { makeTrendingMovies } from '../main/makeTrendingMovies';
import { modals } from '../modals';

const signUp = e => {
  e.preventDefault();
  const email = refs.authForm.elements.email.value;
  const password = refs.authForm.elements.password.value;

  signUpFetch({ email, password })
    .then(res => {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userId', JSON.stringify(res.data.localId));
      store.auth.isLoggedIn = true;
      store.auth.userId = res.data.localId;
      store.movie.page = 1;
      store.movie.query = '';
      makeNavList();
      makeTrendingMovies();

      closeAuthModal();
      modals({
        openButton: document.querySelector('[data-action="signUp"]'),
        closeButton: refs.authModalClose,
        backdrop: refs.authBackdrop,
        action: 'close',
      });
      refs.authForm.reset();
    })
    .catch(err => {
      Notify.failure(err.response.data.error.message);

      closeAuthModal();
      modals({
        openButton: document.querySelector('[data-action="signUp"]'),
        closeButton: refs.authModalClose,
        backdrop: refs.authBackdrop,
        action: 'close',
      });
    });
};

const onSignUpClick = () => {
  refs.authSbmBtn.textContent = 'Sign up';
  refs.authTitle.textContent = 'Sign up';
  refs.authForm.addEventListener('submit', signUp);
  openAuthModal();
};

export { signUp, onSignUpClick };
