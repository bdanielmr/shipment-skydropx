import { TYPE_FETCHING, BASE_URL } from './constants';

export const getApiZone = async (
  url = '',
  method = TYPE_FETCHING.get,
  params = {},
  asyncr = false,
  file = false
) => {
  const BaseUrl = `${BASE_URL}/${url}`;
  const resp = await fetch(BaseUrl, {
    method,
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br'
    }
  })
    .then((response) => response.json())
    .catch((err) => err);
  return resp;
};
