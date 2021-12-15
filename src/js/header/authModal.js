import { refs } from '../base/refs';
import { logIn } from './logIn';
import { makeNavList } from './nav';
import { signUp } from './signUp';

const closeAuthModal = () => {
  refs.authBackdrop.classList.remove('is-open');
  refs.authForm.removeEventListener('submit', logIn);
  refs.authForm.removeEventListener('submit', signUp);
  makeNavList();
};

const escCloseModal = e => {
  if (e.key !== 'Escape') return;
  closeAuthModal();
  document.removeEventListener('keydown', escCloseModal);
};

const openAuthModal = () => {
  refs.authBackdrop.classList.add('is-open');
  document.addEventListener('keydown', escCloseModal);
};

refs.authModalClose.addEventListener('click', closeAuthModal);
refs.authBackdrop.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  closeAuthModal();
});

export { openAuthModal, closeAuthModal };
