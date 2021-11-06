import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {useState} from 'react';
import Header from '../header/header';
import MainScreenTabs from '../main-screen-tabs/main-screen-tabs';
import MainScreenSort from '../main-screen-sort/main-screen-sort';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {addClassModifier, getOffersByCity, getSortedOffers} from '../../common/utils';
import {OfferType} from '../../common/const';

const mapStateToProps = ({city, offers, sort}: State) => ({
  city,
  offers,
  sort,
});

const connector = connect(mapStateToProps);

function MainScreen(props: ConnectedProps<typeof connector>): JSX.Element {
  const {city, offers, sort} = props;
  const currentOffers = getOffersByCity(offers, city);
  const sortedOffers = getSortedOffers(currentOffers, sort);
  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`${addClassModifier(!sortedOffers.length, 'page__main', 'index-empty')} page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainScreenTabs />
        {Boolean(sortedOffers.length) && (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {city}</b>
                <MainScreenSort />
                <OfferList
                  offers={sortedOffers}
                  offerType={OfferType.Main}
                  onActiveCardIdSelect={setActiveCardId}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  className="cities__map"
                  cityLocation={(currentOffers.length !== 0) ? currentOffers[0].city.location : undefined}
                  offers={sortedOffers}
                  activeCardId={activeCardId}
                />
              </div>
            </div>
          </div>
        )}
        {!sortedOffers.length && (
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
                </div>
              </section>
              <div className="cities__right-section" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
