import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import './style.css';

function NotFoundScreen(): JSX.Element {
  const location = useLocation();

  return (
    <div className="wrapper-404">
      <h1 className="title-404" data-text="404">404</h1>
      <p className="description-404">
        The page at <b>{location.pathname}</b> - not found!
      </p>
      <p className="description-404">
        Return to <Link to={AppRoute.MainScreen} className="description-404__link">main page</Link>.
      </p>
    </div>
  );
}

export default NotFoundScreen;
