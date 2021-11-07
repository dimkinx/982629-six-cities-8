import {AuthorizationStatus, CityType, FetchStatus, SortingType} from '../common/const';
import {Offer} from './offer';

type State = {
  city: CityType,
  sort: SortingType,
  offers: {
    data: Offer[],
    fetchStatus: FetchStatus,
  },
  favoriteOffers: {
    data: Offer[],
    fetchStatus: FetchStatus,
  },
  authorizationStatus: AuthorizationStatus,
};

export type {State};
