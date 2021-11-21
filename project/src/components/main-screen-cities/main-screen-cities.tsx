import {useState} from 'react';
import {useSelector} from 'react-redux';
import MainScreenSort from '../main-screen-sort/main-screen-sort';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {OfferType} from '../../common/const';
import {getFilteredOffers, getSortedOffers} from '../../store/data/data-selectors';
import {getCity, getSorting} from '../../store/user/user-selectors';

function MainScreenCities(): JSX.Element {
  const filteredOffers = useSelector(getFilteredOffers);
  const sortedOffers = useSelector(getSortedOffers);
  const currentCity = useSelector(getCity);
  const currentSort = useSelector(getSorting);

  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden" data-testid="subtitle">Places</h2>
          <b className="places__found">{sortedOffers.length} places to stay in {currentCity}</b>
          <MainScreenSort
            currentSort={currentSort}
          />
          <OfferList
            offers={sortedOffers}
            offerType={OfferType.Main}
            onActiveCardIdSelect={setActiveCardId}
          />
        </section>
        <div className="cities__right-section">
          <Map
            className="cities__map"
            cityLocation={(filteredOffers.length !== 0) ? filteredOffers[0].city.location : undefined}
            offers={sortedOffers}
            activeCardId={activeCardId}
          />
        </div>
      </div>
    </div>
  );
}

export default MainScreenCities;
