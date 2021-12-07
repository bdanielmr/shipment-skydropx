import { getApiSky } from './api';
import { TYPE_FETCHING, API_KEY } from './constants';

export const apiPostShipments = (data) => getApiSky(`v1/shipments/`, TYPE_FETCHING.post, data);

export const apiGetInfoShipment = (data) => getApiSky(`v1/labels/`, TYPE_FETCHING.post, data);
