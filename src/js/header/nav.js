import { refs } from '../base/refs';
import { store } from '../base/store';
import { addSearchFormListener, removeSearchFormListener } from '../findForm/findForm';
import { makeTrendingMovies } from '../main/makeTrendingMovies';
import { onLogInClick } from './logIn';
import { logOut } from './logOut';
import { onSignUpClick } from './signUp';
import { modals } from '../modals';
import { makeWatched } from '../main/makeWatched';
import { onFilterButtonClick } from './onFilterButtonClick';
import { checkButtons } from '../modalFilm/checkButtons';

const homeHeaderMarkup = `<form name="search" class="search">
      <input class="search__input" type="text" name="query" placeholder="Поиск фильмов" />
      <button type="submit" class="search__button">
        <svg class="search__icon-wrapper" viewBox="0 0 32 32">
            <path class="search__icon" fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M14.667 25.333c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667z"></path>
            <path class="search__icon" fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M28 28.001l-5.8-5.8"></path>
        </svg>
      </button>
    </form>`;

const myLibraryHeaderMarkup = `<ul class="filter">
      <li class="filter__item">
        <button data-filteraction='watched' class="filter__button">watched</button>
      </li>
      <li class="filter__item"><button data-filteraction='queue' class="filter__button">queue</button></li>
    </ul>`;

const onHomeClick = () => {
  if (refs.header.classList.contains('lib')) {
    document.querySelector('.filter').removeEventListener('click', onFilterButtonClick);
  }
  store.movie.page = 1;
  store.movie.query = '';
  const current = refs.navList.querySelector('.nav__item--current');
  current.classList.remove('nav__item--current');
  const item = refs.navList.querySelector('[data-action="home"]');
  item.classList.add('nav__item--current');
  refs.headerWrapper.innerHTML = homeHeaderMarkup;
  addSearchFormListener();
  makeTrendingMovies();

  if (refs.header.classList.contains('lib')) {
    refs.header.classList.remove('lib');
  }
};

const onLibClick = () => {
  if (!refs.header.classList.contains('lib')) {
    removeSearchFormListener();
  }
  refs.headerWrapper.innerHTML = myLibraryHeaderMarkup;
  refs.header.classList.add('lib');
  document
    .querySelector(`[data-filteraction='watched']`)
    .closest('li')
    .classList.add('filter__item--current');
  document.querySelector('.filter').addEventListener('click', onFilterButtonClick);
  makeWatched();
};

const onNavListClick = e => {
  if (!e.target.classList.contains('nav__button')) return;

  const current = refs.navList.querySelector('.nav__item--current');
  const item = e.target.closest('li');
  const action = item.dataset.action;
  store.movie.page = 1;
  store.movie.query = '';

  current.classList.remove('nav__item--current');
  item.classList.add('nav__item--current');

  switch (action) {
    case 'home':
      onHomeClick();
      break;

    case 'myLibrary':
      onLibClick();
      break;

    case 'logIn':
      onLogInClick();
      break;

    case 'signUp':
      onSignUpClick();
      break;

    case 'logOut':
      logOut();
      break;

    default:
      refs.headerWrapper.innerHTML = homeHeaderMarkup;
      if (refs.header.classList.contains('lib')) {
        refs.header.classList.remove('lib');
      }
      break;
  }

  checkButtons();
};

const makeNavList = () => {
  const navItems = [{ data: 'home', name: 'home' }];

  if (store.auth.isLoggedIn) {
    navItems.push({ data: 'myLibrary', name: 'my library' }, { data: 'logOut', name: 'log out' });
  } else {
    navItems.push({ data: 'logIn', name: 'log in' }, { data: 'signUp', name: 'sign up' });
  }

  const markup = navItems.reduce((acc, item) => {
    acc += `<li class="nav__item " data-action="${item.data}">
          <button type="button" class="nav__button">${item.name}</button>
        </li>`;

    return acc;
  }, '');

  refs.navList.innerHTML = markup;
  refs.headerWrapper.innerHTML = homeHeaderMarkup;
  refs.navList.querySelector('[data-action="home"]').classList.add('nav__item--current');
  refs.navList.addEventListener('click', onNavListClick);
  refs.headerLogo.addEventListener('click', onHomeClick);
  addSearchFormListener();
  refs.header.classList.remove('lib');
  if (!store.auth.isLoggedIn) {
    modals({
      openButton: document.querySelector('[data-action="logIn"]'),
      closeButton: refs.authModalClose,
      backdrop: refs.authBackdrop,
    });
    modals({
      openButton: document.querySelector('[data-action="signUp"]'),
      closeButton: refs.authModalClose,
      backdrop: refs.authBackdrop,
    });
  }
};

export { makeNavList };
