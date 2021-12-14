import { refs } from '../base/refs';
import { logIn } from './logIn';
import { signUp } from './signUp';

const openAuthModal = () => {
  refs.authBackdrop.classList.add('is-open');
};

const closeAuthModal = () => {
  refs.authBackdrop.classList.remove('is-open');
  refs.authForm.removeEventListener('submit', logIn);
  refs.authForm.removeEventListener('submit', signUp);
};

refs.authModalClose.addEventListener('click', closeAuthModal);

export { openAuthModal, closeAuthModal };
