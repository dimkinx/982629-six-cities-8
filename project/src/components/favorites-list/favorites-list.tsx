import FavoritesListLink from '../favorites-list-link/favorites-list-link';
import OfferCard from '../offer-card/offer-card';
import {getFilteredOffersByCity, getOfferCities} from '../../common/utils';
import {OfferType} from '../../common/const';
import {Offer} from '../../types/offer';

type FavoritesListProps = {
  favoriteOffers: Offer[];
}

function FavoritesList({favoriteOffers}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {getOfferCities(favoriteOffers).map((city) => (
        <li
          key={city}
          className="favorites__locations-items"
        >
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <FavoritesListLink
                currentCity={city}
              />
            </div>
          </div>
          <div className="favorites__places">
            {getFilteredOffersByCity(favoriteOffers, city).map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                offerType={OfferType.Favorites}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
