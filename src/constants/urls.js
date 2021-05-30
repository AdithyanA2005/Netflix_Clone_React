import { API_KEY } from './constants'

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99`;

export const action_movies = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy_movies = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror_movies = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romance_movies = `discover/movie?api_key=${API_KEY}&with_genres=10749`;