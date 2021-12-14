import { refs } from './base/refs';
import { store } from './base/store';

const homeHeaderMarkup = `<form name="search" class="search">
      <input class="search__input" type="text" name="query" placeholder="Поиск фильмов" />
      <button type="submit" class="search__button">
        <svg class="search__icon-wrapper">
          <use class="search__icon" href="./images/icons/icons.svg#search"></use>
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
      break;

    case 'signUp':
      break;

    case 'logOut':
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
  refs.headerWrapper.innerHTML = homeHeaderMarkup;
};

export { makeNavList };
