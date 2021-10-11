import OfferList from '../offer-list/offer-list';
import {getOfferCities} from '../../utils';
import {OfferType, OfferSittingsType} from '../../types/offer-types';

type FavoritesListProps = {
  offerSittings: OfferSittingsType;
  offers: OfferType[];
}

function FavoritesList({offerSittings, offers}: FavoritesListProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const cities = getOfferCities(favoritesOffers);

  return (
    <ul className="favorites__list">
      {cities.map((city, index) => (
        <li
          key={index.toString()}
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
            offerSittings={offerSittings}
            offers={favoritesOffers.filter((offer) => offer.city.name === city)}
          />
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
