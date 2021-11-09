import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../common/const';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/state';
import React from 'react';
import {logoutAction} from '../../store/api-actions';

function Header(): JSX.Element {
  const authStatus = useSelector((state: State) => state.auth.status);
  const authEmail = useSelector((state: State) => state.auth.data?.email);
  const isAuthorized = authStatus === AuthStatus.Auth;
  const dispatch = useDispatch();

  const handleSignOutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
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

export default Header;
