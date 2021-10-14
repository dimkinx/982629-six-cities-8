import OfferList from '../offer-list/offer-list';
import {getOfferCities} from '../../common/utils';
import {OfferType, OfferListSittingsType} from '../../types/offer-types';

type FavoritesListProps = {
  offerListSittings: OfferListSittingsType;
  offers: OfferType[];
}

function FavoritesList({offerListSittings, offers}: FavoritesListProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const cities = getOfferCities(favoritesOffers);

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li
          key={city}
          className="favorites__locations-items"
        >
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <OfferList
            offerListSittings={offerListSittings}
            offers={favoritesOffers.filter((offer) => offer.city.name === city)}
          />
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
