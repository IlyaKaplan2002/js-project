import './sass/main.scss';

import { makeNavList } from './js/header/nav';

import { fetchTrendingMovies } from './js/api/movie/fetchTrendingMovies';
import { matchGenresAndFilter } from './js/cards/matchGenres';
import { renderMarkup } from './js/cards/renderMarkup';
import {onOpenModalStudents} from './js/modalStudents';
import { makeTrendingMovies } from './js/main/makeTrendingMovies';
import {fetchWatchedFilms} from './js/api/firebase/fetchWatched';
import {refs} from './js/base/refs'

makeNavList();

makeTrendingMovies();

// import { modals } from './js/modalButton';

// const openButton= document.querySelector('.footer__button');
// const closeButton=document.querySelector('.closeModal');
// const backdrop=document.querySelector('.js-backdropStudents') ;
// // modals (document.querySelector('.footer__button'), document.querySelector('.closeModal'), document.querySelector('.js-backdropStudents'));
// // modals (openButton,  closeButton,backdrop);
// // modals (document.querySelector('.footer__button'), document.querySelector('.closeModal'), document.querySelector('.js-backdropStudents'));
modals (refs.openButtonStudents,refs.closeButtonStudents,refs.backdropStudents);