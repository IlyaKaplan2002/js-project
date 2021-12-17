import { Notify } from 'notiflix';
import { logInFetch } from '../api/auth/authAPI';
import { refs } from '../base/refs';
import { store } from '../base/store';
import { makeTrendingMovies } from '../main/makeTrendingMovies';
import { modals } from '../modalButton';
import { closeAuthModal, openAuthModal } from './authModal';
import { makeNavList } from './nav';

const logIn = e => {
  e.preventDefault();
  const email = refs.authForm.elements.email.value;
  const password = refs.authForm.elements.password.value;

  logInFetch({ email, password })
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
        openButton: document.querySelector('[data-action="logIn"]'),
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
        openButton: document.querySelector('[data-action="logIn"]'),
        closeButton: refs.authModalClose,
        backdrop: refs.authBackdrop,
        action: 'close',
      });
    });
};

const onLogInClick = () => {
  refs.authSbmBtn.textContent = 'Log in';
  refs.authTitle.textContent = 'Log in';
  refs.authForm.addEventListener('submit', logIn);
  openAuthModal();
};

export { logIn, onLogInClick };
