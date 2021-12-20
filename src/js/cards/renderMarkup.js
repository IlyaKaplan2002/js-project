import { MOVIE_POSTER_URL } from '../api/apiBaseURLs';
import { refs } from '../base/refs';

export { renderMarkup };

function renderMarkup(films) {
  const markup = films.reduce((acc, film) => {
    let {
      id,
      poster_path,
      original_title = 'Unknown',
      genres = ['movie'],
      release_date = 'Unknown-date',
      vote_average = 'Unknown',
      key = '',
    } = film;

    if (refs.header.classList.contains('lib')) {
      key = film.key;
    }

    const posterUrl = poster_path ? `${MOVIE_POSTER_URL}${poster_path}` : '';
    acc += `<li class="card-set-item film-card">
        <button type='button' class='film-button' data-key='${key}' data-id='${id}'>
            <img style='height:400px' src="${posterUrl}" alt="${original_title}" class="movie-poster-img" />
            <div>
                <h2 class="movie-title">
                    ${original_title}
                </h2>
                <p class="movie-info">
                    ${genres.join(', ')}
                    |
                    <span class="movie-genre">${release_date.split('-')[0]}</span>
                    <span class="movie-rating">${vote_average.toFixed(1)}</span> 
                </p>
            </div>       
        </button>
    </li>`;

    return acc;
  }, '');

  refs.trendingMovies.innerHTML = markup;
}
