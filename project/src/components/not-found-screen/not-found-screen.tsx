import {useHistory, useLocation} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import './style.scss';

function NotFoundScreen(): JSX.Element {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="wrapper-404">
      <h1 className="title-404" data-text="404">404</h1>
      <p className="description-404">The page at <b>{location.pathname}</b> - not found.</p>
      <p className="sub-description-404">
        You may {(history.length > 1) && <><button onClick={() => history.goBack()} type="button">go back</button> or </>}
        return to <button onClick={() => history.push(AppRoute.MainScreen)} type="button">main page</button>
      </p>
    </div>
  );
}

export default NotFoundScreen;
