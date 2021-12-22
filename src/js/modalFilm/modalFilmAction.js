import { refs } from '../store/refs';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { fetchOneMovie } from '/js/api/movie/fetchOneMovie';
import { MOVIE_POSTER_URL } from '../api/apiBaseURLs';
import { removeLoader } from '../utils/preloader';
import { store } from '../store/store';

const renderOneMovie = (film, key) => {
  const {
    id,
    poster_path,
    original_title = 'Unknown',
    genres = ['movie'],
    vote_average = 'Unknown',
    title,
    overview = 'Not found.',
    popularity,
    vote_count,
  } = film[0];

  const about = overview ? overview : 'Not found.';
  if (!overview) {
    refs.filmModal.filmModalButtons.classList.add('noOverview');
  } else {
    refs.filmModal.filmModalButtons.classList.remove('noOverview');
  }

  const isLoggedIn = store.auth.isLoggedIn;

  if (isLoggedIn) {
    refs.filmModal.filmModalButtons.dataset.filmid = id;
    refs.filmModal.filmModalButtons.dataset.key = key;
    refs.filmModal.filmModalButtons.classList.remove('visually-hidden');
  } else {
    refs.filmModal.filmModalButtons.classList.add('visually-hidden');
  }

  const poster = poster_path
    ? `${MOVIE_POSTER_URL}${poster_path}`
    : 'https://d3aa3603f5de3f81cb9fdaa5c591a84d5723e3cb.hosting4cdn.com/wp-content/uploads/2020/11/404-poster-not-found-CG17701-1.png';

  refs.filmModal.filmModalImage.setAttribute('src', `${poster}`);
  refs.filmModal.filmModalImage.setAttribute('alt', `${original_title}`);
  refs.filmModal.filmModalTitle.textContent = `${title}`;
  refs.filmModal.filmModalVote.textContent = `${vote_average}`;
  refs.filmModal.filmModalVotes.textContent = `${vote_count}`;
  refs.filmModal.filmModalPopularity.textContent = `${popularity.toFixed(1)}`;
  refs.filmModal.filmModalOriginalTitle.textContent = `${original_title}`;
  refs.filmModal.filmModalGenre.textContent = `${genres.join(', ')}`;
  refs.filmModal.filmModalAbout.textContent = `${about}`;
};

const onFilmsListClick = e => {
  if (e.target.nodeName === 'UL' || !e.target.closest('button')) return;
  const id = e.target.closest('button').dataset.id;
  const key = e.target.closest('button').dataset.key;
  fetchOneMovie(id)
    .then(data => {
      removeLoader();
      return matchGenresAndFilter(data);
    })
    .then(film => renderOneMovie(film, key));
};

export { onFilmsListClick };
