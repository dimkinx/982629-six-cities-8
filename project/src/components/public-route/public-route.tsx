import {RouteProps, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getIsAuthorized} from '../../store/user/user-selectors';
import {AppRoute} from '../../common/const';

function PublicRoute({...props}: RouteProps): JSX.Element {
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <Route {...props}>
      {isAuthorized ? <Redirect to={AppRoute.MainScreen} /> : props.children}
    </Route>
  );
}

export default PublicRoute;
