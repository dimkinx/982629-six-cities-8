import React, {useEffect} from 'react';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {State} from '../../types/state';
import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import Logo from '../logo/logo';
import {FetchStatus, LogoSize} from '../../common/const';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loadingScreen';
import {addClassModifier} from '../../common/utils';

const mapStateToProps = ({favoriteOffers}: State) => ({
  favoriteOffers,
});

const connector = connect(mapStateToProps);

function FavoritesScreen(props: ConnectedProps<typeof connector>): JSX.Element {
  const {favoriteOffers} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (favoriteOffers.fetchStatus === FetchStatus.Unknown) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, favoriteOffers.fetchStatus]);

  if (favoriteOffers.fetchStatus === FetchStatus.Loading) {
    return <LoadingScreen />;
  }

  return (
    <div className={addClassModifier(!favoriteOffers.data.length, 'page', 'favorites-empty')}>
      <Header />

      {Boolean(favoriteOffers.data.length) && (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList
                offers={favoriteOffers.data}
              />
            </section>
          </div>
        </main>
      )}
      {!favoriteOffers.data.length && (
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

export {FavoritesScreen};
export default connector(FavoritesScreen);
