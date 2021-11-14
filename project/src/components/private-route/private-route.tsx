import {RouteProps} from 'react-router';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../common/const';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';

function PrivateRoute({...props}: RouteProps): JSX.Element {
  const isAuthorized = useSelector((state: State) => state.user.auth.status === AuthStatus.Auth);

  return (
    <Route {...props}>
      {isAuthorized ? props.children : <Redirect to={AppRoute.LoginScreen} />}
    </Route>
  );
}

export default PrivateRoute;
