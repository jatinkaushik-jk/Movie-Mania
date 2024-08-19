
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export const DEFAULT_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}`; //&page=
export const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?&api_key=${API_KEY}`;  //&page=
export const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?&api_key=${API_KEY}`;  //&page=
export const TRENDING_MOVIES_URL = `https://api.themoviedb.org/3/trending/movie/day?&api_key=${API_KEY}`;  //&page=
export const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?&api_key=${API_KEY}`;  //&page=
export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}`; //&query=