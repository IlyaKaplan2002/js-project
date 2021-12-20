const loaderMarkup = `<div id="page-loader" class="preloader">
    <div class="loader"></div>
    </div>`;

const loader = () => {
  document.body.insertAdjacentHTML('beforeend', loaderMarkup);
};

const removeLoader = () => {
  const preloader = document.getElementById('page-loader');
  preloader.remove();
};

export { loader, removeLoader };
