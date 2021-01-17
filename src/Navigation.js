import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from 'pages/Homepage';
import Breed from 'pages/Breed';
import NotFound from 'pages/NotFound';

const Navigation = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/breed/:imageId" exact component={Breed} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Navigation;
