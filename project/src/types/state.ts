import {CityType} from '../common/const';
import {Offer} from './offer';

type State = {
  city: CityType,
  offers: Offer[] | [],
};

export type {State};
