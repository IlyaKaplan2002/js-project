import { makeQueue } from '../main/makeQueue';
import { makeWatched } from '../main/makeWatched';

const onFilterButtonClick = e => {
  if (!e.target.closest('button')) return;
  const current = document.querySelector('.filter__item--current');
  current.classList.remove('filter__item--current');
  e.target.closest('li').classList.add('filter__item--current');

  const action = e.target.dataset.filteraction;

  switch (action) {
    case 'watched':
      makeWatched();
      break;

    case 'queue':
      makeQueue();
      break;

    default:
      makeWatched();
      break;
  }
};

export { onFilterButtonClick };
