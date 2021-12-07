import axios from 'axios';


const API_KEY = 'a4999a28333d1147dbac0d104526337a';
const BASE_URL = 'https://api.themoviedb.org/3'
export const IMG_API = 'https://image.tmdb.org/t/p/w1280';


export async function fetchMovies(page) {
    const responce = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    return await responce.data;
};

export async function fetchMovieInformation(movie_id) {
    const responce = await axios.get(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
    return await responce.data;
};

export async function fetchSearchMovie(searchTerm) {
    const responce = await axios.get(`${BASE_URL}/search/movie?&api_key=${API_KEY}&query=${searchTerm}`);
    return await responce.data;
};

export async function fetchMovieRecommendation(movie_id) {
    const responce = await axios.get(`${BASE_URL}/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
    return await responce.data;
};

export async function fetchGenreMovieList() {
    const responce = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    return await responce.data;
};