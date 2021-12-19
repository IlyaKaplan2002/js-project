const filterLibFilms = films => {
  const keys = Object.keys(films);

  const filterFilms = [];

  for (const key of keys) {
    filterFilms.push({ key, ...films[key] });
  }

  return filterFilms;
};

export { filterLibFilms };
