import { refs } from '../store/refs';
import { logIn } from './logIn';
import { makeNavList } from './nav';
import { signUp } from './signUp';

const closeAuthModal = () => {
  refs.authForm.removeEventListener('submit', logIn);
  refs.authForm.removeEventListener('submit', signUp);
  makeNavList();
};

const escCloseAuthModal = e => {
  if (e.key !== 'Escape') return;
  closeAuthModal();
  document.removeEventListener('keydown', escCloseAuthModal);
};

const openAuthModal = () => {
  document.addEventListener('keydown', escCloseAuthModal);
};

refs.authModalClose.addEventListener('click', closeAuthModal);
refs.authBackdrop.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  closeAuthModal();
});

export { openAuthModal, closeAuthModal };
