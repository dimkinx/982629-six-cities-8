import {AuthStatus, CityType, ErrorMessage, FetchStatus, SortingType} from '../common/const';
import {Offer} from './offer';
import {AuthData} from './auth-data';
import {Review} from './review';

type State = {
  city: CityType,
  sort: SortingType,
  offer: {
    data: Offer | null,
    fetchStatus: FetchStatus,
  },
  offers: {
    data: Offer[],
    fetchStatus: FetchStatus,
  },
  nearbyOffers: {
    data: Offer[],
    fetchStatus: FetchStatus,
  },
  favoriteOffers: {
    data: Offer[],
    fetchStatus: FetchStatus,
  },
  reviews: {
    data: Review[],
    fetchStatus: FetchStatus,
  },
  auth: {
    data: AuthData | null,
    error: ErrorMessage,
    status: AuthStatus,
  },
};

export type {State};
