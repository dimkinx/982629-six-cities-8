import {CityType, RatingType, SortingType} from './const';
import {Offer} from '../types/offer';

const addClassModifier = (predicate: boolean, className: string, modifier = 'active'): string => predicate
  ? `${className} ${className}--${modifier}`
  : className;

const getRatingPercentage = (rating: number): string => `${Math.round(rating) / Object.values(RatingType).length * 100}%`;

const getOfferCities = (offers: Offer[]): CityType[] => (
  [...new Set(offers.reduce((acc: CityType[], offer) => ([...acc, offer.city.name]), []))]
);

const getStatefulItems = (items: string[], itemValueName: string): {id: string, [itemValueName: string]: string}[] => (
  items.map((item, index) => ({id: index.toString(), [itemValueName]: item}))
);

const getFilteredOffersByCity = (offers: Offer[], city: CityType): Offer[] => (
  offers.filter((offer: Offer) => offer.city.name === city)
);

const getSortedOffersByType = (offers: Offer[], sortingType: SortingType): Offer[] => {
  switch (sortingType) {
    case SortingType.LowToHigh: {
      return [...offers].sort((firstOffer, secondOffer) => (firstOffer.price - secondOffer.price));
    }
    case SortingType.HighToLow: {
      return [...offers].sort((firstOffer, secondOffer) => (secondOffer.price - firstOffer.price));
    }
    case SortingType.Rating: {
      return [...offers].sort((firstOffer, secondOffer) => (secondOffer.rating - firstOffer.rating));
    }
    default: {
      return [...offers];
    }
  }
};

const updateOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => offers
  .map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);

const updateFavoriteOffers = (favoriteOffers: Offer[], updatedOffer: Offer): Offer[] => {
  if (updatedOffer.isFavorite) {
    return favoriteOffers.concat(updatedOffer);
  }

  return favoriteOffers
    .map((favoriteOffer) => favoriteOffer.id === updatedOffer.id ? updatedOffer : favoriteOffer)
    .filter((favoriteOffer) => favoriteOffer.isFavorite);
};

export {
  addClassModifier,
  getRatingPercentage,
  getOfferCities,
  getStatefulItems,
  getFilteredOffersByCity,
  getSortedOffersByType,
  updateOffers,
  updateFavoriteOffers
};
