import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const AppRoute = {
  MAIN_SCREEN: '/',
  LOGIN_SCREEN: '/login',
  FAVORITES_SCREEN: '/favorites',
  OFFER_SCREEN: '/offer/:id',
};

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN_SCREEN} exact>
          <MainScreen placesCount={placesCount} />
        </Route>
        <Route path={AppRoute.LOGIN_SCREEN} exact>
          <LoginScreen />
        </Route>
        <Route path={AppRoute.FAVORITES_SCREEN} exact>
          <FavoritesScreen />
        </Route>
        <Route path={AppRoute.OFFER_SCREEN} exact>
          <OfferScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
