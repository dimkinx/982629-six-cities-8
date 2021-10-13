import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus, OfferListSettings} from '../../const';
import {OfferType} from '../../types/offer-types';
import {ReviewType} from '../../types/review-types';

type AppProps = {
  offers: OfferType[];
  reviews: ReviewType[];
}

function App({offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MainScreen}>
          <MainScreen
            offerListSittings={OfferListSettings.Main}
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.LoginScreen}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FavoritesScreen}
          render={() => (
            <FavoritesScreen
              offerListSittings={OfferListSettings.Favorites}
              offers={offers}
            />
          )}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRoute.OfferScreen}>
          <OfferScreen
            offerListSittings={OfferListSettings.Near}
            offers={offers}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
