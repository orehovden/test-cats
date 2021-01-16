import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from 'pages/Homepage';
import NotFound from 'pages/NotFound';

const Navigation = () => (
  <Router>
    <Switch>
      <Route path="/" component={Homepage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Navigation;
