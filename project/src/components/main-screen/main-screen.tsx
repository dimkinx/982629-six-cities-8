import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {useState} from 'react';
import Header from '../header/header';
import MainScreenTabs from '../main-screen-tabs/main-screen-tabs';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {addClassModifier, getOffersByCity} from '../../common/utils';
import {OfferType} from '../../common/const';

const mapStateToProps = ({city, offers}: State) => ({
  city,
  offers,
});

const connector = connect(mapStateToProps);

function MainScreen(props: ConnectedProps<typeof connector>): JSX.Element {
  const {city, offers} = props;
  const currentOffers = getOffersByCity(offers, city);
  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`${addClassModifier(!currentOffers.length, 'page__main', 'index-empty')} page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainScreenTabs />
        {Boolean(currentOffers.length) && (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <OfferList
                  offers={currentOffers}
                  offerType={OfferType.Main}
                  onActiveCardIdSelect={setActiveCardId}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  className="cities__map"
                  offers={currentOffers}
                  activeCardId={activeCardId}
                />
              </div>
            </div>
          </div>
        )}
        {!currentOffers.length && (
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
