import {AuthStatus, CityType, FetchStatus, SortingType} from '../common/const';
import {Offer} from './offer';
import {AuthData} from './auth-data';

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
  auth: {
    data: AuthData | null,
    error: string,
    status: AuthStatus,
  },
};

export type {State};
