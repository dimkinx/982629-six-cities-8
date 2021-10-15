import OfferCard from '../offer-card/offer-card';
import {getOfferCities} from '../../common/utils';
import {Offer} from '../../types/offer-types';
import {OfferType} from '../../common/const';

type FavoritesListProps = {
  offers: Offer[];
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
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
          <div className="favorites__places">
            {favoritesOffers.filter((offer) => offer.city.name === city).map((offer) => (
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
