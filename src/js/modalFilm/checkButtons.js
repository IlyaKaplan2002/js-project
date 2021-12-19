import { refs } from '../base/refs';

const checkButtons = () => {
  if (refs.header.classList.contains('lib')) {
    refs.filmModal.addToWatched.classList.add('visually-hidden');
    refs.filmModal.addToQueue.classList.add('visually-hidden');
    refs.filmModal.delete.classList.remove('visually-hidden');
  } else {
    refs.filmModal.addToWatched.classList.remove('visually-hidden');
    refs.filmModal.addToQueue.classList.remove('visually-hidden');
    refs.filmModal.delete.classList.add('visually-hidden');
  }
};

export { checkButtons };
