import {RouteProps, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getIsAuthorized} from '../../store/user/user-selectors';
import {AppRoute} from '../../common/const';

function PrivateRoute({...props}: RouteProps): JSX.Element {
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <Route {...props}>
      {isAuthorized ? props.children : <Redirect to={AppRoute.LoginScreen} />}
    </Route>
  );
}

export default PrivateRoute;
