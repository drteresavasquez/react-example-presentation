import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import ReadMore from '../views/ReadMore';

export default function Routes() {
  return (
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home />}
        />
        <Route
          path="/more/:id"
          component={() => <ReadMore />}
        />
        <Redirect from="*" to="/" />
      </Switch>
  );
}
