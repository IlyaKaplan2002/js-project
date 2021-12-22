import { MOVIE_POSTER_URL } from '../api/apiBaseURLs';
import { refs } from '../store/refs';

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

    const posterUrl = poster_path
      ? `${MOVIE_POSTER_URL}${poster_path}`
      : 'https://d3aa3603f5de3f81cb9fdaa5c591a84d5723e3cb.hosting4cdn.com/wp-content/uploads/2020/11/404-poster-not-found-CG17701-1.png';
    acc += `<li class="card-set-item film-card">
        <button type='button' class='film-button' data-key='${key}' data-id='${id}'>
            <div class="img-wrapper">
              <img src="${posterUrl}" alt="${original_title}" class="movie-poster-img" />
            </div>
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
