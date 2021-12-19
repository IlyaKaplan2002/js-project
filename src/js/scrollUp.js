import { scrollTo } from 'scroll-js';

export const scrollUp = () => {
  scrollTo(window, {
    top: 0,
    easing: 'ease-in-out',
  });
};
