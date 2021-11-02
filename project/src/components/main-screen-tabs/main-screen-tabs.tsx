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

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreenTabs(props: PropsFromRedux): JSX.Element {
  const {city: currentCity, onLinkClick} = props;

  const handleLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>, city: CityType) => {
    evt.preventDefault();
    onLinkClick(city);
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
                onClick={(evt) => handleLinkClick(evt, city)}
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
