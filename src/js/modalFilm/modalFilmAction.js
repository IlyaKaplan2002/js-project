import { refs } from '../base/refs';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { fetchOneMovie } from '/js/api/movie/fetchOneMovie';
import { MOVIE_POSTER_URL } from '../api/apiBaseURLs';
import { removeLoader } from '../base/reloader';
import { store } from '../base/store';

const renderOneMovie = film => {
  const {
    id,
    poster_path,
    original_title = 'Unknown',
    genres = ['movie'],
    vote_average = 'Unknown',
    title,
    overview,
    popularity,
    vote_count,
  } = film[0];

  const isLoggedIn = store.auth.isLoggedIn;

  if (isLoggedIn) {
    refs.filmModal.filmModalButtons.dataset.filmid = id;
    refs.filmModal.filmModalButtons.classList.remove('visually-hidden');
  } else {
    refs.filmModal.filmModalButtons.classList.add('visually-hidden');
  }

  const poster = poster_path ? `${MOVIE_POSTER_URL}${poster_path}` : '';

  refs.filmModal.filmModalImage.setAttribute('src', `${poster}`);
  refs.filmModal.filmModalImage.setAttribute('alt', `${original_title}`);
  refs.filmModal.filmModalTitle.textContent = `${title}`;
  refs.filmModal.filmModalVote.textContent = `${vote_average}`;
  refs.filmModal.filmModalVotes.textContent = `${vote_count}`;
  refs.filmModal.filmModalPopularity.textContent = `${popularity.toFixed(1)}`;
  refs.filmModal.filmModalOriginalTitle.textContent = `${original_title}`;
  refs.filmModal.filmModalGenre.textContent = `${genres}`;
  refs.filmModal.filmModalAbout.textContent = `${overview}`;
};

const onFilmsListClick = e => {
  if (e.target.nodeName === 'UL' || !e.target.closest('button')) return;
  const id = e.target.closest('button').dataset.id;
  fetchOneMovie(id)
    .then(data => {
      removeLoader();
      return matchGenresAndFilter(data);
    })
    .then(renderOneMovie);
};

export { onFilmsListClick };
