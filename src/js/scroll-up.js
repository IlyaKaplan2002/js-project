document.addEventListener("scroll", handleScroll);

let scrollToTopBtn = document.querySelector(".scrollToTopBtn");

export function handleScroll() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    
    scrollToTopBtn.style.display = "block";
  } else {

    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}