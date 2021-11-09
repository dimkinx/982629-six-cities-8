import {State} from '../../types/state';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import Header from '../header/header';
import MainScreenTabs from '../main-screen-tabs/main-screen-tabs';
import MainScreenSort from '../main-screen-sort/main-screen-sort';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {addClassModifier, getOffersByCity, getSortedOffers} from '../../common/utils';
import {FetchStatus, OfferType} from '../../common/const';
import {fetchOffersAction} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loadingScreen';

function MainScreen(): JSX.Element {
  const {city, offers, sort} = useSelector((state: State) => state);
  const currentOffers = getOffersByCity(offers.data, city);
  const sortedOffers = getSortedOffers(currentOffers, sort);
  const [activeCardId, setActiveCardId] = useState<null | number>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (offers.fetchStatus === FetchStatus.Unknown) {
      dispatch(fetchOffersAction());
    }
  }, [dispatch, offers.fetchStatus]);

  if (offers.fetchStatus === FetchStatus.Loading) {
    return <LoadingScreen />;
  }

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

export default MainScreen;
