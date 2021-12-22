import { refs } from '../store/refs';

const checkButtons = () => {
  if (refs.header.classList.contains('lib')) {
    const currentFilter = document.querySelector('.filter__item--current>button').dataset
      .filteraction;

    refs.filmModal.delete.classList.remove('visually-hidden');

    if (currentFilter === 'watched') {
      refs.filmModal.addToWatched.classList.add('visually-hidden');
      refs.filmModal.addToQueue.classList.remove('visually-hidden');
    } else {
      refs.filmModal.addToQueue.classList.add('visually-hidden');
      refs.filmModal.addToWatched.classList.remove('visually-hidden');
    }
  } else {
    refs.filmModal.addToWatched.classList.remove('visually-hidden');
    refs.filmModal.addToQueue.classList.remove('visually-hidden');
    refs.filmModal.delete.classList.add('visually-hidden');
  }
};

export { checkButtons };
