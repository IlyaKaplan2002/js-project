import { refs } from '../base/refs';

const checkTheme = () => {
  const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));

  if (isDarkTheme) {
    refs.main.classList.add('dark');
    refs.footer.classList.add('dark');
    refs.themeCheckbox.checked = true;
    // console.dir(refs.themeCheckbox);
  } else {
    refs.main.classList.remove('dark');
    refs.footer.classList.remove('dark');
    refs.themeCheckbox.checked = false;
  }
};

const onThemeInput = e => {
  const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));

  if (isDarkTheme) {
    localStorage.setItem('isDarkTheme', JSON.stringify(false));
  } else {
    localStorage.setItem('isDarkTheme', JSON.stringify(true));
  }
  checkTheme();
};

export { onThemeInput, checkTheme };
