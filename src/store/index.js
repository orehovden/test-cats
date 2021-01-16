import axios from 'axios';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {handleRequests} from '@redux-requests/core';
import {createDriver} from '@redux-requests/axios';
import {breed} from './reducers';

export const configureStore = () => {
  const {requestsReducer, requestsMiddleware} = handleRequests({
    driver: createDriver(
      axios.create({
        baseURL: process.env.REACT_APP_restURL,
        headers: {
          common: {
            'x-api-key': process.env.REACT_APP_apiKey,
          },
        },
      })
    ),
  });

  const reducers = combineReducers({
    requests: requestsReducer,
    breed,
  });

  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...requestsMiddleware))
  );
};
