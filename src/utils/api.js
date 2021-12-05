import { TYPE_FETCHING, BASE_URL, API_KEY } from './constants';

export const getApiSky = async (
  url = '',
  method = TYPE_FETCHING.post,
  body = {},
  params = {},
  asyncr = false,
  file = false
) => {
  const BaseUrl = `${BASE_URL}/${url}`;
  const resp = await fetch(BaseUrl, {
    method,
    headers: {
      Authorization: `Token token=${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body
  })
    .then((response) => response.json())
    .catch((err) => err);
  return resp;
};
