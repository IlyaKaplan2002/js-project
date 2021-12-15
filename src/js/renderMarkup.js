// import getRefs from './base/refs';



// import movieСardTpl from '././handlebars/movie-card.hbs';
export { renderMarkup };
// ../../handlebars/movie-card.hbs
// '../handlebars/movie-card.hbs';

// const refs = getRefs();

const refs = {
    trendingMovies: document.querySelector('.trending-movies-list'),
}

function renderMarkup(results) {
    const markup = movieСardTpl(results);
        console.log(results);
        console.log(markup);
    refs.trendingMovies.innerHTML = markup;
}