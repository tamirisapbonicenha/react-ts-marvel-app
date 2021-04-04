import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, ProfileDetail, Error } from '../pages';

export function RenderRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/char/:id">
        <ProfileDetail />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
}
