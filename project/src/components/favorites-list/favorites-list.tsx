import FavoritesListLink from '../favorites-list-link/favorites-list-link';
import OfferCard from '../offer-card/offer-card';
import {getFilteredOffersByCity} from '../../common/utils';
import {OfferType} from '../../common/const';
import {useSelector} from 'react-redux';
import {getFavoriteOffers, getFavoriteOffersCities} from '../../store/data/data-selectors';

function FavoritesList(): JSX.Element {
  const favoriteOffersCities = useSelector(getFavoriteOffersCities);
  const favoriteOffers = useSelector(getFavoriteOffers);

  return (
    <ul
      className="favorites__list"
      data-testid="favorites__list"
    >
      {favoriteOffersCities.map((city) => (
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
