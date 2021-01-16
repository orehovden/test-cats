import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation';
import {fetchBreeds} from 'store/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  return <Navigation />;
};

export default App;
