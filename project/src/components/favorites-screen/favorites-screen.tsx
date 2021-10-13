import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import Logo from '../logo/logo';
import {LogoSize} from '../../const';
import {OfferType, OfferListSittingsType} from '../../types/offer-types';

type FavoritesScreenProps = {
  offerListSittings: OfferListSittingsType;
  offers: OfferType[];
}

function FavoritesScreen({offerListSittings, offers}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList
              offerListSittings={offerListSittings}
              offers={offers}
            />
          </section>
        </div>
      </main>
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
