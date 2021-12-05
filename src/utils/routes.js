import { getApiSky } from './api';
import { TYPE_FETCHING, API_KEY } from './constants';

export const apiPostShipments = (data) => getApiSky(`v1/shipments/`, TYPE_FETCHING.post, data);

export const apiGetMoviesPage = (data) =>
  data?.component
    ? getApiSky(
        `3/search/movie?query=${data.find}&api_key=${API_KEY}&page=${data.page}`,
        TYPE_FETCHING.get,
        data
      )
    : getApiSky(`3/trending/all/day?api_key=${API_KEY}&page=${data.page}`, TYPE_FETCHING.get, data);

export const apiGetInfoMovie = (data) =>
  getApiSky(`3/movie/${data.id}?api_key=${API_KEY}`, TYPE_FETCHING.get, data);

export const apiSearchMovie = (data) =>
  getApiSky(`3/search/movie?query=${data.find}&api_key=${API_KEY}`, TYPE_FETCHING.get, data);
