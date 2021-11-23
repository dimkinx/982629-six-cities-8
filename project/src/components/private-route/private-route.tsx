import {RouteProps, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../store/user/user-selectors';
import {AppRoute, AuthStatus} from '../../common/const';
import LoadingScreen from '../loading-screen/loadingScreen';

function PrivateRoute({...props}: RouteProps): JSX.Element {
  const authStatus = useSelector(getAuthStatus);

  if (authStatus === AuthStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    <Route {...props}>
      {authStatus === AuthStatus.Auth ? props.children : <Redirect to={AppRoute.LoginScreen} />}
    </Route>
  );
}

export default PrivateRoute;
