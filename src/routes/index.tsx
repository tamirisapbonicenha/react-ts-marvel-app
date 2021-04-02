import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, ProfileDetail, Error } from '../pages';

export function RenderRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/char" exact component={ProfileDetail} />
      <Route component={Error} />
    </Switch>
  );
}
