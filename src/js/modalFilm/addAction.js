import { Notify } from 'notiflix';
import { sendToLibrary } from '../api/firebase/addToFirebase';
import { fetchOneMovie } from '../api/movie/fetchOneMovie';
import { removeLoader } from '../base/reloader';
import { matchGenresAndFilter } from '../cards/matchGenres';

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
  const action = e.target.dataset.addaction;

  onAddToLibClick(filmId, action);
};

export { onAddAction };
