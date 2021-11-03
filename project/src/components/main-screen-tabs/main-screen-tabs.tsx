import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {connect, ConnectedProps} from 'react-redux';
import {setCity} from '../../store/actions';
import {Actions} from '../../types/actions';
import {State} from '../../types/state';
import {addClassModifier} from '../../common/utils';
import {CityType} from '../../common/const';

const mapStateToProps = ({city}: State) => ({city});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onLinkClick(city: CityType) {
    dispatch(setCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function MainScreenTabs(props: ConnectedProps<typeof connector>): JSX.Element {
  const {city: currentCity, onLinkClick} = props;

  const handleLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onLinkClick((evt.target as HTMLAnchorElement).innerText as CityType);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityType).map((city) => (
            <li
              key={city}
              className="locations__item"
            >
              <a
                onClick={handleLinkClick}
                className={`${addClassModifier(city === currentCity, 'tabs__item')} locations__item-link`}
                href="/"
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export {MainScreenTabs};
export default connector(MainScreenTabs);
