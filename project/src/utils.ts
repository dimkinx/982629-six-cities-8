import {MAX_NUMBER_STARS} from './const';

const addActiveClass = (predicate: boolean, className: string): string => predicate
  ? `${className} ${className}--active`
  : className;

const getRatingPercentage = (rating: number): string => `${Math.round(rating) / MAX_NUMBER_STARS * 100}%`;

export {addActiveClass, getRatingPercentage};
