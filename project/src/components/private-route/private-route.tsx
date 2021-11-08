import {RouteProps} from 'react-router';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../common/const';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';

function PrivateRoute({...props}: RouteProps): JSX.Element {
  const authStatus = useSelector((state: State) => state.auth.status);

  return (
    <Route {...props}>
      {authStatus === AuthStatus.Auth ? props.children : <Redirect to={AppRoute.LoginScreen} />}
    </Route>
  );
}

export default PrivateRoute;
