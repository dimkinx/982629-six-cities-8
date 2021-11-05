import {AuthorizationStatus, CityType, SortingType} from '../common/const';
import {Offer} from './offer';

type State = {
  city: CityType,
  offers: Offer[],
  sort: SortingType,
  authorizationStatus: AuthorizationStatus,
};

export type {State};
