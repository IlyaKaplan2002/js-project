import axios from 'axios';
import { MOVIE_API } from './apiKeys';
import { MOVIE_BASE_URL } from './apiBaseURLs';

export { fetchTrendingMovies };


async function fetchTrendingMovies() {
    try {
        const response = await axios.get(`${MOVIE_BASE_URL}trending/movie/day?api_key=${MOVIE_API}`);

        return response.data.results;
        }
    catch (error) { 
        console.error(error);
    }
}
    

export default class FetchMovieGenres {
    constructor() {
    this._genres = this.fetchGenres();
    }

    async fetchGenres() {
        try {
            const response = await axios.get(`${MOVIE_BASE_URL}genre/movie/list?api_key=${MOVIE_API}&language=en-US`);

            console.log(response.data.genres);
            }
        catch (error) { 
            console.error(error);
        }      
    }

  get genres() {
    return this._genres;
    }
}