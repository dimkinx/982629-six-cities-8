import MainScreenTabsItem from '../main-screen-tabs-item/main-screen-tabs-item';
import {CityType} from '../../common/const';
import {memo} from 'react';

type MainScreenTabsProps = {
  currentCity: CityType;
}

function MainScreenTabs(props: MainScreenTabsProps): JSX.Element {
  const {currentCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityType).map((city) => (
            <MainScreenTabsItem
              key={city}
              city={city}
              currentCity={currentCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(MainScreenTabs, (prev, next) => prev.currentCity === next.currentCity);
