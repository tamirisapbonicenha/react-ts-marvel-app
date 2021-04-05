import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, CharacterDetail, Error } from '../pages';

export function RenderRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/char/:id">
        <CharacterDetail />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
}
