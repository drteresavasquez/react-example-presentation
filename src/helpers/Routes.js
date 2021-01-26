import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import Video from '../views/Video';

export default function Routes() {
  return (
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home />}
        />
        <Route
          path="/video/:id"
          component={() => <Video />}
        />

        <Redirect from="*" to="/" />
      </Switch>
  );
}
