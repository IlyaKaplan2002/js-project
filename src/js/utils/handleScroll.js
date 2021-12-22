import { refs } from '../store/refs';

export function handleScroll() {
  let scrollableHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const GOLDEN_RATIO = 0.5;

  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    refs.scrollToTopBtn.classList.remove('isHidden');
  } else {
    refs.scrollToTopBtn.classList.add('isHidden');
  }
}
