import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/state';
import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import Logo from '../logo/logo';
import {RequestStatus, LogoSize} from '../../common/const';
import {getFavoriteOffersAction} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loadingScreen';
import {addClassModifier} from '../../common/utils';

function FavoritesScreen(): JSX.Element {
  const {data: favoriteOffers, requestStatus} = useSelector((state: State) => state.favoriteOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (requestStatus === RequestStatus.Unknown) {
      dispatch(getFavoriteOffersAction());
    }
  }, [dispatch, requestStatus]);

  if (requestStatus === RequestStatus.Loading) {
    return <LoadingScreen />;
  }

  return (
    <div className={addClassModifier(!favoriteOffers.length, 'page', 'favorites-empty')}>
      <Header />

      {Boolean(favoriteOffers.length) && (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList
                offers={favoriteOffers}
              />
            </section>
          </div>
        </main>
      )}
      {!favoriteOffers.length && (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
      )}

      <footer className="footer container">
        <Logo
          width={LogoSize.Footer.Width}
          height={LogoSize.Footer.Height}
        />
      </footer>
    </div>
  );
}

export default FavoritesScreen;
