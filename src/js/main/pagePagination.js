import { refs } from '../base/refs';
import { store } from '../base/store';
import { scrollUp } from '../scrollUp';
import { makeFilms } from './makeFilms';
import { makeTrendingMovies } from './makeTrendingMovies';

const leftArrow = `
        <li class="arrow-item arrow-left">
            <button type="button" data-arrow='left' class="pagination-button arrow" id="arrow-left">
            <svg id="arrow-left" viewBox="0 0 16 16" class = "arrow-icon">
                  <path fill='none' stroke-width='2px' d="M12.6667 8H3.33334"/><path fill='none' stroke-width='2px' d="M8.00001 12.6668L3.33334 8.00016L8.00001 3.3335"/>
                </svg>
            </button>
        </li>`;

const rightArrow = `
    <li class="arrow-item arrow-right">
      <button type="button" data-arrow='right' class="pagination-button arrow" id="arrow-right">
        <svg id="arrow-right" viewBox="0 0 16 16" class = "arrow-icon">
            <path fill='none' stroke-width='2px' d="M3.33335 8H12.6667"/><path fill='none' stroke-width='2px' d="M8.00002 12.6668L12.6667 8.00016L8.00002 3.3335"/>
          </svg>
      </button>
    </li>`;

const points = `<li class='points'><span class='text-container'>...</span></li>`;

const addFirstAndLastButtons = () => {
  const totalPages = store.movie.totalPages;
  refs.paginationList.insertAdjacentHTML('afterbegin', makeOneButton(1));
  refs.paginationList.insertAdjacentHTML('beforeend', makeOneButton(totalPages));
};

const onArrowClick = e => {
  const action = e.target.closest('button').dataset.arrow;
  if (action === 'left') {
    store.movie.page -= 1;
  } else {
    store.movie.page += 1;
  }
  if (screen.width < 768) {
    makeMarkupForMobile();
  }

  if (screen.width >= 768) {
    makeMarkupForDesktop();
  }
  if (!store.movie.query) {
    makeTrendingMovies();
  } else makeFilms();

  scrollUp();
};

const onPagListClick = e => {
  const button = e.target.closest('button');
  if (!button || button.disabled) return;
  if (button.dataset.arrow) {
    onArrowClick(e);
    return;
  }
  store.movie.page = Number(button.dataset.pageid);
  if (screen.width < 768) {
    makeMarkupForMobile();
  }

  if (screen.width >= 768) {
    makeMarkupForDesktop();
  }
  if (!store.movie.query) {
    makeTrendingMovies();
  } else makeFilms();

  scrollUp();
};

const addMobilePoints = () => {
  const page = store.movie.page;
  const totalPages = store.movie.totalPages;

  if (page >= 3 && page <= totalPages - 2) {
    refs.paginationList.insertAdjacentHTML('afterbegin', points);
    refs.paginationList.insertAdjacentHTML('beforeend', points);
  } else if (page < 3) {
    refs.paginationList.insertAdjacentHTML('beforeend', points);
  } else {
    refs.paginationList.insertAdjacentHTML('afterbegin', points);
  }
};

const addDesktopPoints = () => {
  const page = store.movie.page;
  const totalPages = store.movie.totalPages;

  if (page >= 5 && page <= totalPages - 4) {
    refs.paginationList.insertAdjacentHTML('afterbegin', points);
    refs.paginationList.insertAdjacentHTML('beforeend', points);
  } else if (page < 5) {
    refs.paginationList.insertAdjacentHTML('beforeend', points);
  } else {
    refs.paginationList.insertAdjacentHTML('afterbegin', points);
  }
};

const makeDisabled = () => {
  const page = store.movie.page;
  const totalPages = store.movie.totalPages;
  if (page === 1) {
    document.querySelector('#arrow-left').disabled = true;
  } else if (page === totalPages) {
    document.querySelector('#arrow-right').disabled = true;
  }
};

const makeActive = () => {
  const page = store.movie.page;
  document.querySelector(`[data-pageid='${page}']`).classList.add('pagination-button--current');
};

const addArrows = () => {
  refs.paginationList.insertAdjacentHTML('afterbegin', leftArrow);
  refs.paginationList.insertAdjacentHTML('beforeend', rightArrow);
};

const makeOneButton = id => {
  return `<li class="pagination-item"><button type='button' data-pageid='${id}' class="pagination-button button${id}">${id}</button></li>`;
};

const makeMarkupForMobile = () => {
  const totalPages = store.movie.totalPages;
  const page = store.movie.page;
  let markup = '';

  if (totalPages > 4) {
    if (page >= 3 && page <= totalPages - 2) {
      for (let i = page - 1; i <= page + 1; i += 1) {
        markup += makeOneButton(i);
      }
    } else if (page < 3) {
      for (let i = 2; i <= 4; i += 1) {
        markup += makeOneButton(i);
      }
    } else {
      for (let i = totalPages - 3; i < totalPages; i += 1) {
        markup += makeOneButton(i);
      }
    }
  } else {
    for (let i = 1; i <= totalPages; i += 1) {
      markup += makeOneButton(i);
    }
  }

  refs.paginationList.innerHTML = markup;
  addMobilePoints();
  addFirstAndLastButtons();
  makeActive();
};

const makeMarkupForDesktop = () => {
  const totalPages = store.movie.totalPages;
  const page = store.movie.page;
  let markup = '';

  if (totalPages > 7) {
    if (page >= 4 && page <= totalPages - 3) {
      for (let i = page - 2; i <= page + 2; i += 1) {
        markup += makeOneButton(i);
      }
    } else if (page < 4) {
      for (let i = 2; i <= 7; i += 1) {
        markup += makeOneButton(i);
      }
    } else {
      for (let i = totalPages - 6; i < totalPages; i += 1) {
        markup += makeOneButton(i);
      }
    }
  } else {
    for (let i = 2; i < totalPages; i += 1) {
      markup += makeOneButton(i);
    }
  }
  refs.paginationList.innerHTML = markup;
  addDesktopPoints();
  addFirstAndLastButtons();
  addArrows();
  makeActive();
  makeDisabled();
};

const removePagination = () => {
  refs.paginationList.innerHTML = '';
  refs.paginationList.removeEventListener('click', onPagListClick);
};

const makePagination = () => {
  if (store.movie.totalPages > 1) {
    refs.paginationList.addEventListener('click', onPagListClick);
    if (screen.width < 768) {
      makeMarkupForMobile();
    }

    if (screen.width >= 768) {
      makeMarkupForDesktop();
    }
  } else {
    refs.paginationList.innerHTML = '';
  }
};

export { makePagination };
