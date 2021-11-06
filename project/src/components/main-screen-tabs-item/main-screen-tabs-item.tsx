import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {setCity} from '../../store/actions';
import {Actions} from '../../types/actions';
import {CityType} from '../../common/const';

type MainScreenTabsItemProps = {
  city: CityType;
  className: string;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onLinkClick(city: CityType) {
    dispatch(setCity(city));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenTabsItemProps;

function MainScreenTabsItem(props: ConnectedComponentProps): JSX.Element {
  const {city, className, onLinkClick} = props;

  const handleLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onLinkClick(city);
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

export {MainScreenTabsItem};
export default connector(MainScreenTabsItem);
