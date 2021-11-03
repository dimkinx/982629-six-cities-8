import {CityType, SortingType} from '../common/const';
import {Offer} from './offer';

type State = {
  city: CityType,
  offers: Offer[],
  sort: SortingType,
};

export type {State};
