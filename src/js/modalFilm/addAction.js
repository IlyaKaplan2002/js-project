import { Notify } from 'notiflix';
import { sendToLibrary } from '../api/firebase/addToFirebase';
import { delFromFirebase } from '../api/firebase/delFromFirebase';
import { fetchOneMovie } from '../api/movie/fetchOneMovie';
import { refs } from '../store/refs';
import { removeLoader } from '../utils/preloader';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { makeQueue } from '../main/makeQueue';
import { makeWatched } from '../main/makeWatched';
import { modals } from '../utils/modals';

const onDeleteClick = key => {
  const currentFilter = document.querySelector('.filter__item--current>button').dataset
    .filteraction;

  delFromFirebase(key, currentFilter).then(() => {
    removeLoader();
    Notify.success('Successfully deleted!');
    modals({
      openButton: refs.trendingMovies,
      closeButton: refs.filmModal.filmModalCloseButton,
      backdrop: refs.filmModal.filmModalBackdrop,
      action: 'close',
    });
    switch (currentFilter) {
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
  });
};

const onAddToLibClick = (filmId, action) => {
  fetchOneMovie(filmId)
    .then(data => {
      removeLoader();
      return matchGenresAndFilter(data);
    })
    .then(film => sendToLibrary(film[0], action))
    .then(res => {
      removeLoader();
      res.data.name ? Notify.success('Successfully added!') : Notify.failure('Was already in!');
    })
    .catch(err => Notify.failure(err.response.data.error.message));
};

const onAddAction = e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const filmId = e.currentTarget.dataset.filmid;
  const key = e.currentTarget.dataset.key;
  const action = e.target.dataset.addaction;

  if (action !== 'delete') {
    onAddToLibClick(filmId, action);
    return;
  }
  onDeleteClick(key);
};

export { onAddAction };
