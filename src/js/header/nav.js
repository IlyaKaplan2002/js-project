import { refs } from '../base/refs';
import { store } from '../base/store';
import { onLogInClick } from './logIn';
import { logOut } from './logOut';
import { onSignUpClick } from './signUp';

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
      <li class="filter__item filter__item--current">
        <button class="filter__button">watched</button>
      </li>
      <li class="filter__item"><button class="filter__button">queue</button></li>
    </ul>`;

const onHomeClick = () => {
  const current = refs.navList.querySelector('.nav__item--current');
  current.classList.remove('nav__item--current');
  const item = refs.navList.querySelector('[data-action="home"]');
  item.classList.add('nav__item--current');
  refs.headerWrapper.innerHTML = homeHeaderMarkup;
  if (refs.header.classList.contains('lib')) {
    refs.header.classList.remove('lib');
  }
};

const onLibClick = () => {
  refs.headerWrapper.innerHTML = myLibraryHeaderMarkup;
  refs.header.classList.add('lib');
};

const onNavListClick = e => {
  if (!e.target.classList.contains('nav__button')) return;

  const current = refs.navList.querySelector('.nav__item--current');
  const item = e.target.closest('li');
  const action = item.dataset.action;

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
  refs.navList.querySelector('[data-action="home"]').classList.add('nav__item--current');
  refs.navList.addEventListener('click', onNavListClick);
  refs.headerLogo.addEventListener('click', onHomeClick);
  refs.headerWrapper.innerHTML = homeHeaderMarkup;
  refs.header.classList.remove('lib');
};

export { makeNavList };