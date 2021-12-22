import { store } from '../store/store';
import { makePagination } from '../main/pagePagination';

const filterLibFilmsData = data => {
  let totalPages = 0;
  if (data) {
    totalPages = Math.ceil(data.length / 20);
  }
  store.movie.totalPages = totalPages;
  const filterDataPerPage = data.slice(
    (store.movie.page - 1) * store.movie.perPage,
    (store.movie.page - 1) * store.movie.perPage + store.movie.perPage,
  );

  makePagination();
  return filterDataPerPage;
};

export { filterLibFilmsData };
