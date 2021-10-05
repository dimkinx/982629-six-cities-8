import {RouteProps} from 'react-router';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: string;
}

function PrivateRoute({exact, path, render, authorizationStatus}: PrivateRouteProps): JSX.Element {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.LoginScreen} />
      )}
    />
  );
}

export default PrivateRoute;
