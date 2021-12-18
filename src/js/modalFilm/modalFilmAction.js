import { refs } from '../base/refs';
import { matchGenresAndFilter } from '../cards/matchGenres';
import { fetchOneMovie } from '/js/api/movie/fetchOneMovie';
import { MOVIE_POSTER_URL } from '../api/apiBaseURLs';

const renderOneMovie = film => {
  const {
    poster_path,
    original_title = 'Unknown',
    genres = ['movie'],
    vote_average = 'Unknown',
    title,
    overview,
    popularity,
    vote_count,
  } = film[0];
  
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
  console.log(e.target.closest('button').dataset.id);
  const id = e.target.closest('button').dataset.id;
  fetchOneMovie(id).then(matchGenresAndFilter).then(renderOneMovie);
};

export { onFilmsListClick };
// import { refs } from '../base/refs';
// import { fetchOneMovie } from '/js/api/movie/fetchOneMovie';
// import { MOVIE_POSTER_URL } from '../api/apiBaseURLs';

// const makeModalFilm = id => {
//   fetchOneMovie(id).then(matchOneMovieFilter).then(renderMarkupModalFilm);

// };
// export { makeModalFilm };

// const matchOneMovieFilter = res => {

//     const oneMovieObject = {
//         genre: res[0].genres[0].name,
//         title: res[0].title,
//         original_title: res[0].original_title,
//         overview: res[0].overview,
//         popularity: res[0].popularity,
//         poster_path: res[0].poster_path,
//         vote_average: res[0].vote_average,
//         vote_count: res[0].vote_count,
//     };

//     return oneMovieObject;
// }

// const renderMarkupModalFilm = oneMovieObject => {

// const { genre, title, original_title, overview, popularity, poster_path, vote_average, vote_count } = oneMovieObject;

// const posterUrlModalFilm = poster_path ? `${MOVIE_POSTER_URL}${poster_path}` : '';

// const markupModalFilm = `<div class="film-backdrop backdrop--is-hidden" data-modal>
//         <div class="film-modal">
//             <button type="button" class="button modal__button-in">
//                 <svg class="modal__svg-button" width="30" height="30">
//                     <use href="./images/icons/icons.svg#close"></use>
//                 </svg>
//             </button>
//             <div class="cinema-card">
//                 <a class="gallery__item" href="">
//                     <img class="cinema__image" src="${posterUrlModalFilm}" data-source="${posterUrlModalFilm}" alt="${original_title}" loading="lazy" />
//                 </a>
//                 <div class="info">
//                     <p class="info-item1">
//                         <b class="info-data1">${title}</b>
//                     </p>
//                     <p class="info-item2">
//                         <strong class="info-name">Vote / Votes</strong>
//                         <b class="info-data2"><span class="info-data2-acent1">${vote_average}</span>/ <span
//                                 class="info-data2-acent2">${vote_count}</span></b>
//                     </p>
//                     <p class="info-item3">
//                         <strong class="info-name">Popularity</strong>
//                         <b class="info-data3">${popularity.toFixed(1)}</b>
//                     </p>
//                     <p class="info-item4">
//                         <strong class="info-name">Original Title</strong>
//                         <b class="info-data4">${original_title}</b>
//                     </p>
//                     <p class="info-item5">
//                         <strong class="info-name">Genre</strong>
//                         <b class="info-data5">${genre}</b>
//                     </p>
//                     <p class="info-item6">
//                         <strong class="info-name">About</strong>
//                         <b class="info-data6">${overview}</b>
//                     </p>
//                 </div>
//             </div>
//             <div class="button modal__button-add">
//                 <button type="button" class="add-to-watched">add to watched</button>
//                 <button type="button" class="add-to-queue">add to queue</button>
//             </div>
//         </div>

//     </div>`;

//     refs.trendingMovies.innerHTML = markupModalFilm;
// }
