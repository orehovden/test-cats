import {SELECT_BREED, INCREMENT_PAGE} from './constants';

const initialState = {
  breedId: '',
  page: 0,
};

export const breed = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BREED:
      return {...state, ...action.payload.data, page: 0};
    case INCREMENT_PAGE:
      return {...state, page: state.page + 1};
    default:
      return state;
  }
};
