import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../common/const';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
}

function App({offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MainScreen}>
          <MainScreen />;
        </Route>
        <Route exact path={AppRoute.LoginScreen}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FavoritesScreen}
          render={() => (
            <FavoritesScreen
              offers={offers}
            />
          )}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRoute.OfferScreen}>
          <OfferScreen
            offers={offers}
            reviews={reviews}
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
