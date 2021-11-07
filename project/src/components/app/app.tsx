import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
// import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../common/const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

function App(props: ConnectedProps<typeof connector>): JSX.Element {
  const {authorizationStatus} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MainScreen}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.LoginScreen}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FavoritesScreen}
          render={() => <FavoritesScreen />}
          authorizationStatus={authorizationStatus}
        />
        {/*<Route exact path={AppRoute.OfferScreen}>*/}
        {/*  <OfferScreen />*/}
        {/*</Route>*/}
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
