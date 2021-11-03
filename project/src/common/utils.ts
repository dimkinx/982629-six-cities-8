import {MAX_NUMBER_STARS, CityType, SortingType} from './const';
import {Offer} from '../types/offer';

const addClassModifier = (predicate: boolean, className: string, modifier = 'active'): string => predicate
  ? `${className} ${className}--${modifier}`
  : className;

const getRatingPercentage = (rating: number): string => `${Math.round(rating) / MAX_NUMBER_STARS * 100}%`;

const getOfferCities = (offers: Offer[]): string[] => (
  [...new Set(offers.reduce((acc: string[], offer) => ([...acc, offer.city.name]), []))].sort()
);

const getStatefulItems = (items: string[], itemValueName: string): {id: string; [itemValueName: string]: string}[] => (
  items.map((item, index) => ({id: index.toString(), [itemValueName]: item}))
);

const getOffersByCity = (offers: Offer[], city: CityType): Offer[] => (
  offers.filter((offer: Offer) => offer.city.name === city)
);

const getSortedOffers = (offers: Offer[], sortingType: SortingType): Offer[] => {
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

export {addClassModifier, getRatingPercentage, getOfferCities, getStatefulItems, getOffersByCity, getSortedOffers};
