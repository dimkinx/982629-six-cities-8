import React from 'react';
import {useDispatch} from 'react-redux';
import {setCity} from '../../store/actions';
import {CityType} from '../../common/const';

type MainScreenTabsItemProps = {
  city: CityType;
  className: string;
}

function MainScreenTabsItem(props: MainScreenTabsItemProps): JSX.Element {
  const {city, className} = props;
  const dispatch = useDispatch();

  const handleLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setCity(city));
  };

  return (
    <li className="locations__item">
      <a
        onClick={handleLinkClick}
        className={className}
        href="/"
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default MainScreenTabsItem;
