import {CityType, RatingType, SortingType} from './const';
import {Offer} from '../types/offer';

const addClassModifier = (predicate: boolean, className: string, modifier = 'active'): string => predicate
  ? `${className} ${className}--${modifier}`
  : className;

const getRatingPercentage = (rating: number): string => `${Math.round(rating) / Object.values(RatingType).length * 100}%`;

const getOfferCities = (offers: Offer[]): CityType[] => (
  [...new Set(offers.reduce((acc: CityType[], offer) => ([...acc, offer.city.name]), []))].sort()
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

const updateOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);

  if (index !== -1) {
    return [
      ...offers.slice(0, index),
      updatedOffer,
      ...offers.slice(index + 1),
    ];
  }

  return offers;
};

const updateFavoriteOffers = (favoriteOffers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = favoriteOffers.findIndex((favoriteOffer) => favoriteOffer.id === updatedOffer.id);

  if (index === -1) {
    return [...favoriteOffers, updatedOffer];
  }

  return [
    ...favoriteOffers.slice(0, index),
    ...favoriteOffers.slice(index + 1),
  ];
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
