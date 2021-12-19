import {store} from '../base/store';
import { refs } from '../base/refs';
import { fetchTrendingMovies } from './movie/fetchTrendingMovies';
import { findFilms } from './movie/findFilms';

export { makePaginationButtons };

function makePaginationButtons(numberOfButtons) {
  if (screen.width < 768) {
    markupForMobile(numberOfButtons)
  }

  if (screen.width >= 768) {
    markupForDesktop(numberOfButtons)
  }
}

function markupForMobile(numberOfButtons) {
  if (numberOfButtons < 8) {
    makeButtons(numberOfButtons);
  }
  if (numberOfButtons >= 8) {
    makeButtonsAndArrowsMobile(numberOfButtons);
  }
}

function markupForDesktop(numberOfButtons) {
  if (numberOfButtons < 12) {
    makeButtons(numberOfButtons);
  }
  if (numberOfButtons >= 12) {
    makeButtonsAndArrowsDesktop(numberOfButtons);
  }
}

function makeButtonsAndArrowsDesktop(numberOfButtons) {

  makeButtons(numberOfButtons);
  const leftArrow = `
        <li class="arrow-item arrow-left">
            <button type="button" class="pagination-button arrow" id="arrow-left" disabled>
            <svg id="arrow-left" viewBox="0 0 16 16" class = "arrow-icon">
                  <path d="M12.6667 8H3.33334" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00001 12.6668L3.33334 8.00016L8.00001 3.3335" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </li>`;

  const rightArrow = `
    <li class="arrow-item arrow-right">
      <button type="button" class="pagination-button arrow" id="arrow-right">
        <svg id="arrow-right" viewBox="0 0 16 16" class = "arrow-icon">
            <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00002 12.6668L12.6667 8.00016L8.00002 3.3335" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
    </li>`;
  
  refs.paginationList.insertAdjacentHTML('afterbegin', leftArrow);
  refs.paginationList.insertAdjacentHTML('beforeend', rightArrow);

  const buttons = document.querySelectorAll('.pagination-item');

  for (let i = 8; i < buttons.length; i += 1) {
    removeButton(i);
  }

  addPoints(buttons.length - 1);
  
  const leftArrowButton = document.querySelector('#arrow-left');
  const rightArrowButton = document.querySelector('#arrow-right');

  leftArrowButton.addEventListener('click', onLeftArrowClick);
  rightArrowButton.addEventListener('click', onRightArrowClick);
}

function makeButtons(numberOfButtons) {
  let markupArr = [];
  for (let i = 1; i <= numberOfButtons; i += 1) {
    markupArr.push(`<li class="pagination-item"><button type='button' data-id='${i}' class="pagination-button button${i}">${i}</button></li>`);
  }
  refs.paginationList.innerHTML = markupArr.join("");

  document.querySelector('.button1').classList.add('pagination-button--current');
  refs.paginationList.addEventListener('click', onPageClickMobile);

};

function makeButtonsAndArrowsMobile(numberOfButtons) {
  makeButtons(numberOfButtons);
  const leftArrow = `
        <li class="arrow-item arrow-left">
            <button type="button" class="pagination-button arrow" id="arrow-left" disabled>
            <svg id="arrow-left" viewBox="0 0 16 16" class = "arrow-icon">
                  <path d="M12.6667 8H3.33334" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00001 12.6668L3.33334 8.00016L8.00001 3.3335" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </li>`;

  const rightArrow = `
    <li class="arrow-item arrow-right">
      <button type="button" class="pagination-button arrow" id="arrow-right">
        <svg id="arrow-right" viewBox="0 0 16 16" class = "arrow-icon">
            <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00002 12.6668L12.6667 8.00016L8.00002 3.3335" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
    </li>`;
  
  refs.paginationList.insertAdjacentHTML('afterbegin', leftArrow);
  refs.paginationList.insertAdjacentHTML('beforeend', rightArrow);

  const buttons = document.querySelectorAll('.pagination-item');

  for (let i = 6; i <= buttons.length; i += 1) {
    removeButton(i);
  }

  const leftArrowButton = document.querySelector('#arrow-left');
  const rightArrowButton = document.querySelector('#arrow-right');

  leftArrowButton.addEventListener('click', onLeftArrowClick);
  rightArrowButton.addEventListener('click', onRightArrowClick);
}

function onPageClickMobile(event) {
  const elem = event.target;
  

  if (elem.classList.contains('arrow') || elem.classList.contains('pagination-list')) return;
  const btnId = Number(elem.dataset.id);
  const buttonsCount = document.querySelectorAll('.pagination-item').length;

  onEveryButtonClick(btnId, buttonsCount, elem);
};

function onLeftArrowClick() {
  const currentButton = document.querySelector('.pagination-button--current');
  const currentId = Number(currentButton.dataset.id);

  const btnId = currentId - 1;
  const buttonsCount = document.querySelectorAll('.pagination-item').length;
  const elem = document.querySelector(`.button${btnId}`);

  onEveryButtonClick(btnId, buttonsCount, elem);
}

function onRightArrowClick() {
  const currentButton = document.querySelector('.pagination-button--current');
  const currentId = Number(currentButton.dataset.id);
  const btnId = currentId + 1;
  const buttonsCount = document.querySelectorAll('.pagination-item').length;
  const elem = document.querySelector(`.button${btnId}`);

  onEveryButtonClick(btnId, buttonsCount, elem);
};

function onEveryButtonClick(btnId, buttonsCount, elem) {
  if (screen.width < 768) {
    if (buttonsCount > 7) {
    const leftArrow = document.querySelector('#arrow-left');
    const rightArrow = document.querySelector('#arrow-right');

    if (btnId === 1) {
      leftArrow.disabled = true;
    } else {
      leftArrow.disabled = false;
    }

    if (btnId === buttonsCount) {
      rightArrow.disabled = true;
    } else {
      rightArrow.disabled = false;
    }

    if (btnId >= 1 && buttonsCount - btnId > 4) {
      onButtonClickMobile(btnId, buttonsCount);
    }
  }
  }

  if (screen.width >= 768) {
    if (buttonsCount > 11) {
      const leftArrow = document.querySelector('#arrow-left');
      const rightArrow = document.querySelector('#arrow-right');

      if (btnId === 1) {
        leftArrow.disabled = true;
      } else {
        leftArrow.disabled = false;
      }

      if (btnId === buttonsCount) {
        rightArrow.disabled = true;
      } else {
        rightArrow.disabled = false;
      }

      if (btnId === 1) {
      onFirstButtonClick(btnId, buttonsCount);
      } else if (btnId > 1 && btnId < 5) {
        onStartButtonClick(buttonsCount);
      } else if (btnId >= 5 && btnId <= buttonsCount - 5) {
        onMiddleButtonsClick(btnId, buttonsCount);
      } else if (btnId > buttonsCount - 5 && btnId <= buttonsCount) {
        onEndButtonsClick(btnId, buttonsCount);
      }
    }
  }

  changeActivePage(elem);
  makeRequest(btnId);
};

function makeRequest(id) {
  store.movie.page = id;
  
  if (!store.movie.query) {
    fetchTrendingMovies();
  }

  if (store.movie.query) {
    findFilms();
  }
};

function onStartButtonClick(count) {
  removeAllButtonsDesktop(count);
  removePoints();
  addPoints(7);
  addButton(2);
  addButton(3);
  addButton(4);
  addButton(5);
  addButton(6);
  addButton(7);
}

function onFirstButtonClick(id, count) {
  removePoints();
  addPoints(count - 1);
  removeAllButtonsDesktop(count);
  addButton(id);
  addButton(id + 1);
  addButton(id + 2);
  addButton(id + 3);
  addButton(id + 4);
  addButton(id + 5);
  addButton(id + 6);
  addButton(count);
};

function onMiddleButtonsClick(id, count) {
  removeAllButtonsDesktop(count);
  addButton(id);
  addButton(id - 1);
  addButton(id - 2);
  addButton(id + 1);
  addButton(id + 2);
  removePoints();
  addPoints(1);
  addPoints(count - 1);
  addButton(count)
};

function onEndButtonsClick(id, count) {
  removePoints();
  addPoints(1);
  removeAllButtonsDesktop(count);
  addButton(count);
  addButton(count-1);
  addButton(count-2);
  addButton(count-3);
  addButton(count-4);
  addButton(count-5);
  addButton(count-6);
  
};

function removeAllButtonsDesktop(count) {
  for (let i = 2; i < count; i += 1) {
    removeButton(i);
  }
}

function onButtonClickMobile(id, count) {
    removeAllButtonsMobile(count);
    addButton(id);
    addButton(id + 1);
    addButton(id + 2);
    addButton(id + 3);
    addButton(id + 4);  
};

function changeActivePage(elem) {
  document
    .querySelector('.pagination-button--current')
    .classList.remove('pagination-button--current');

  elem.classList.add('pagination-button--current');
}

function makePoints() {
  const elem = document.createElement('li');
  const dotsContainer = document.createElement('span');
  dotsContainer.textContent = '...';
  dotsContainer.classList.add('text-container');
  elem.appendChild(dotsContainer);
  elem.classList.add('points');
  return elem;
};

function addPoints (idAfter) {
  document.querySelector(`.button${idAfter}`).parentNode.after(makePoints());
};

function removePoints() {
  const allPoints = document.querySelectorAll('.points');
  for (const points of allPoints) {
    points.remove();
  }
};

function addButton(id) {
  const buttons = document.querySelectorAll('.pagination-item');

  buttons[Number(id) - 1].classList.remove('visually-hidden');
  document.querySelector(`.button${id}`).classList.remove('visually-hidden');
};

function removeButton(id) {
  const buttons = document.querySelectorAll('.pagination-item');

  buttons[Number(id) - 1].classList.add('visually-hidden');
  document.querySelector(`.button${id}`).classList.add('visually-hidden');
};

function removeAllButtonsMobile(count) {
  for (let i = 1; i < count; i += 1) {
    removeButton(i);
  }
}
