import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setCity} from '../../store/user/user-actions';
import {AppRoute, CityType} from '../../common/const';

type FavoritesListLinkProps = {
  currentCity: CityType;
}

function FavoritesListLink({currentCity}: FavoritesListLinkProps): JSX.Element {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(setCity(currentCity));
  };

  return (
    <Link
      onClick={handleLinkClick}
      className="locations__item-link"
      to={AppRoute.MainScreen}
    >
      <span>{currentCity}</span>
    </Link>
  );
}

export default FavoritesListLink;
