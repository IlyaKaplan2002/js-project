import './sass/main.scss';

import { makeNavList } from './js/header/nav';

import { makeTrendingMovies } from './js/main/makeTrendingMovies';
import { modals } from './js/modals';
import { refs } from './js/base/refs';
import { removeLoader } from './js/base/reloader';
import { checkTheme, onThemeInput } from './js/main/themes';

window.onload = removeLoader;

makeNavList();

makeTrendingMovies();

modals(refs.modalStudents);

refs.themeCheckbox.addEventListener('input', onThemeInput);

checkTheme();
