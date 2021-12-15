import { signUpFetch } from '../api/auth/authAPI';
import { closeAuthModal, openAuthModal } from './authModal';
import { refs } from '../base/refs';
import { store } from '../base/store';
import { makeNavList } from './nav';
import { Notify } from 'notiflix';

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
      makeNavList();

      closeAuthModal();
      refs.authForm.reset();
    })
    .catch(err => {
      Notify.failure(err.response.data.error.message);

      closeAuthModal();
    });
};

const onSignUpClick = () => {
  refs.authSbmBtn.textContent = 'Sign up';
  refs.authTitle.textContent = 'Sign up';
  refs.authForm.addEventListener('submit', signUp);
  openAuthModal();
};

export { signUp, onSignUpClick };
