import {SearchRes} from './types';

const baseUrl = 'https://api.github.com';

export const fetchGet = (url: string, params: any): Promise<SearchRes> => {
  console.log(`${baseUrl}${url}?q=${params.search}`);
  return fetch(`${baseUrl}${url}?q=${params.search}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .catch(err => err.message);
};
