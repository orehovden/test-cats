import {
  FETCH_BREEDS,
  INCREMENT_PAGE,
  SELECT_BREED,
  SELECT_BREED_IMAGES,
} from './constants';
import {getQuery} from '@redux-requests/core';

export const fetchBreeds = () => ({
  type: FETCH_BREEDS,
  request: {url: `/breeds`},
});

export const fetchBreedImages = (
  breed_id,
  page = 0,
  limit = 8,
  order = 'asc',
  size = 'small'
) => ({
  // }) => ({
  type: SELECT_BREED_IMAGES,
  request: {
    url: `/images/search`,
    params: {breed_id, limit, order, page, size},
  },
  meta: {
    onSuccess: (request, requestAction, store) => {
      store.dispatch(incrementPage());

      const state = store.getState();
      const {data} = getQuery(state, {type: 'SELECT_BREED_IMAGES'});
      const {data: requestData} = request;
      const hasMore = requestData.length === limit;

      request.data = {
        breedImages: data ? data.breedImages.concat(requestData) : requestData,
        hasMore,
      };
      return request;
    },
  },
});

export const selectBreed = (breedId) => ({
  type: SELECT_BREED,
  payload: {
    data: {
      breedId,
    },
  },
});

export const incrementPage = () => ({
  type: INCREMENT_PAGE,
});

export const updateHasMore = (hasMore) => ({
  type: INCREMENT_PAGE,
});
