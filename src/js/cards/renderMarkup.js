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
    } = film;

    const posterUrl = poster_path ? `${MOVIE_POSTER_URL}${poster_path}` : '';
    acc += `<li class="card-set-item">
        <button type=button data-id='${id}'>
            <img style='height:400px' src="${posterUrl}" alt="${original_title}" />
            <div>
                <h2>
                    ${original_title}
                </h2>
                <p>
                    ${genres.join(', ')}
                    |
                    ${release_date.split('-')[0]}
                    ${vote_average}
                </p>
            </div>       
        </button>
    </li>`;

    return acc;
  }, '');

  refs.trendingMovies.innerHTML = markup;
}
