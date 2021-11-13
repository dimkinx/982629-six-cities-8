import {MouseEvent, memo} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../logo/logo';
import {logoutAction} from '../../store/api-actions';
import {AppRoute, AuthStatus} from '../../common/const';
import {State} from '../../types/state';

function Header(): JSX.Element {
  const isAuthorized = useSelector((state: State) => state.auth.status === AuthStatus.Auth);
  const authEmail = useSelector((state: State) => state.auth.data?.email);

  const dispatch = useDispatch();

  const handleSignOutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={`${isAuthorized ? AppRoute.FavoritesScreen : AppRoute.LoginScreen}`}
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper" />
                  <span className="header__user-name user__name">
                    {`${isAuthorized ? authEmail : 'Sign in'}`}
                  </span>
                </Link>
              </li>
              {isAuthorized && (
                <li className="header__nav-item">
                  <a
                    onClick={handleSignOutClick}
                    className="header__nav-link"
                    href="/"
                  >
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
