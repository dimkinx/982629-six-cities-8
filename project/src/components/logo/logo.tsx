import {MouseEvent} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {LogoSize, AppRoute} from '../../common/const';

type LogoProps = {
  width?: number;
  height?: number;
}

function Logo(props: LogoProps): JSX.Element {
  const {width = LogoSize.Header.Width, height = LogoSize.Header.Height} = props;

  const location = useLocation();

  const handleLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === AppRoute.MainScreen) {
      evt.preventDefault();
    }
  };

  return (
    <Link
      onClick={handleLinkClick}
      className="header__logo-link"
      to={AppRoute.MainScreen}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
