const filterLibFilms = films => {
  if (!films) throw Error('No films');
  const keys = Object.keys(films);

  const filteredFilms = [];

  for (const key of keys) {
    filteredFilms.push({ key, ...films[key] });
  }

  return filteredFilms.reverse();
};

export { filterLibFilms };
