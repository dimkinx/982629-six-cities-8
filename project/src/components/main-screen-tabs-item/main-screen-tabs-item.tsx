import {MouseEvent} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setCity} from '../../store/actions';
import {CityType} from '../../common/const';

type MainScreenTabsItemProps = {
  city: CityType;
  currentCity: CityType;
}

function MainScreenTabsItem(props: MainScreenTabsItemProps): JSX.Element {
  const {city, currentCity} = props;

  const dispatch = useDispatch();

  const handleLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    if (city !== currentCity) {
      dispatch(setCity(city));
    }
  };

  const compareCities = () => city === currentCity;

  return (
    <li className="locations__item">
      <NavLink
        onClick={handleLinkClick}
        isActive={compareCities}
        activeClassName='tabs__item--active'
        className='tabs__item locations__item-link'
        to="/"
      >
        <span>{city}</span>
      </NavLink>
    </li>
  );
}

export default MainScreenTabsItem;
