import {FETCH_BREEDS} from './constants';

export const fetchBreeds = () => ({
  type: FETCH_BREEDS,
  request: {url: `/breeds`},
});
