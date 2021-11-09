import {useSelector} from 'react-redux';
import {State} from '../../types/state';
import {addClassModifier} from '../../common/utils';
import {CityType} from '../../common/const';
import MainScreenTabsItem from '../main-screen-tabs-item/main-screen-tabs-item';

function MainScreenTabs(): JSX.Element {
  const {city: currentCity} = useSelector((state: State) => state);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityType).map((city) => (
            <MainScreenTabsItem
              key={city}
              city={city}
              className={`${addClassModifier(city === currentCity, 'tabs__item')} locations__item-link`}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainScreenTabs;
