import {useSelector} from 'react-redux';
import {RouteProps} from 'react-router';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../common/const';
import {State} from '../../types/state';

function PublicRoute({...props}: RouteProps): JSX.Element {
  const isAuthorized = useSelector((state: State) => state.user.auth.status === AuthStatus.Auth);

  return (
    <Route {...props}>
      {isAuthorized ? <Redirect to={AppRoute.MainScreen} /> : props.children}
    </Route>
  );
}

export default PublicRoute;
