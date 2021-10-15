import {Link} from 'react-router-dom';
import {LogoSize, AppRoute} from '../../common/const';

type LogoProps = {
  width?: number;
  height?: number;
}

function Logo({width = LogoSize.Header.Width, height = LogoSize.Header.Height}: LogoProps): JSX.Element {
  return (
    <Link to={AppRoute.MainScreen} className="header__logo-link">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}

export default Logo;
