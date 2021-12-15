import { MOVIE_POSTER_URL } from '../api/apiBaseURLs';
import { refs } from '../base/refs';

export { renderMarkup };

function renderMarkup(films) {
  const markup = films.reduce((acc, film) => {
    acc += `<li class="card-set-item">
        <button href="#" target="_blank" rel="noopener noreferrer">
            <img src="${MOVIE_POSTER_URL}${film.poster_path}" alt="${film.original_title}" />
            <div>
                <h2>
                    ${film.original_title}
                </h2>
                <p>
                    ${film.genres}
                    |
                    ${film.release_date.split('-')[0]}
                    ${film.vote_average}
                </p>
            </div>       
        </button>
    </li>`;

    return acc;
  }, '');

  refs.trendingMovies.innerHTML = markup;
}
