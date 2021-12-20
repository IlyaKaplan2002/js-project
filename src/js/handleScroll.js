import { refs } from './base/refs';

export function handleScroll() {
  let scrollableHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const GOLDEN_RATIO = 0.5;

  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    refs.scrollToTopBtn.style.display = 'block';
  } else {
    refs.scrollToTopBtn.style.display = 'none';
  }
}
