import {MAX_NUMBER_STARS} from './const';
import {OfferType} from './types/offer-types';

const addActiveClass = (predicate: boolean, className: string): string => predicate
  ? `${className} ${className}--active`
  : className;

const getRatingPercentage = (rating: number): string => `${Math.round(rating) / MAX_NUMBER_STARS * 100}%`;

const getOfferCities = (offers: OfferType[]): string[] => [...new Set(offers.reduce((acc: string[], offer: OfferType) => ([...acc, offer.city.name]), []))].sort();

export {addActiveClass, getRatingPercentage, getOfferCities};
