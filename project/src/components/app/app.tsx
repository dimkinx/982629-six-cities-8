import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PublicRoute from '../public-route/public-route';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../common/const';

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path={AppRoute.MainScreen}>
        <MainScreen />
      </Route>
      <PublicRoute exact path={AppRoute.LoginScreen}>
        <LoginScreen />
      </PublicRoute>
      <PrivateRoute exact path={AppRoute.FavoritesScreen}>
        <FavoritesScreen />
      </PrivateRoute>
      <Route exact path={AppRoute.OfferScreen}>
        <OfferScreen />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

export default App;
