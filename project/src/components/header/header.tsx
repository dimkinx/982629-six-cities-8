import {MouseEvent, memo} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../logo/logo';
import {logoutAction} from '../../store/user/user-api-actions';
import {AppRoute} from '../../common/const';
import {getIsAuthorized, getUserEmail} from '../../store/user/user-selectors';

function Header(): JSX.Element {
  const isAuthorized = useSelector(getIsAuthorized);
  const userEmail = useSelector(getUserEmail);

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
                    {`${isAuthorized ? userEmail : 'Sign in'}`}
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
