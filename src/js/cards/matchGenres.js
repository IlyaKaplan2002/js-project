import { store } from '../base/store';

const matchGenresAndFilter = films => {
  for (const film of films) {
    film.genres = film.genre_ids.map(
      id => store.movie.genres.filter(genre => genre.id === id)[0].name,
    );
  }

  const filteredFilms = films.map(film => {
    return {
      genres: film.genres,
      id: film.id,
      original_title: film.original_title,
      overview: film.overview,
      popularity: film.popularity,
      poster_path: film.poster_path,
      release_date: film.release_date,
      vote_average: film.vote_average,
      vote_count: film.vote_count,
      title: film.title,
    };
  });

  return filteredFilms;
};

export { matchGenresAndFilter };
