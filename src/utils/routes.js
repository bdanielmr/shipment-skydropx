import { getApiZone } from './api';
import { TYPE_FETCHING, API_KEY } from './constants';

export const apiGetMovies = (data) =>
  getApiZone(`3/trending/all/day?api_key=${API_KEY}`, TYPE_FETCHING.get, data);

export const apiGetMoviesPage = (data) =>
  data?.component
    ? getApiZone(
        `3/search/movie?query=${data.find}&api_key=${API_KEY}&page=${data.page}`,
        TYPE_FETCHING.get,
        data
      )
    : getApiZone(
        `3/trending/all/day?api_key=${API_KEY}&page=${data.page}`,
        TYPE_FETCHING.get,
        data
      );

export const apiGetInfoMovie = (data) =>
  getApiZone(`3/movie/${data.id}?api_key=${API_KEY}`, TYPE_FETCHING.get, data);

export const apiSearchMovie = (data) =>
  getApiZone(`3/search/movie?query=${data.find}&api_key=${API_KEY}`, TYPE_FETCHING.get, data);
