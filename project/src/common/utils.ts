import {CityType, MAX_NUMBER_STARS} from './const';
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

export {addClassModifier, getRatingPercentage, getOfferCities, getStatefulItems, getOffersByCity};
