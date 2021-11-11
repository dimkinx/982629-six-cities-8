import {AuthStatus, CityType, ErrorMessage, RequestStatus, SortingType} from '../common/const';
import {Offer} from './offer';
import {AuthData} from './auth-data';
import {Review} from './review';

type State = {
  city: CityType,
  sort: SortingType,
  offer: {
    data: Offer | null,
    requestStatus: RequestStatus,
  },
  offers: {
    data: Offer[],
    requestStatus: RequestStatus,
  },
  nearbyOffers: {
    data: Offer[],
    requestStatus: RequestStatus,
  },
  favoriteOffers: {
    data: Offer[],
    requestStatus: RequestStatus,
  },
  reviews: {
    data: Review[],
    requestStatus: RequestStatus,
  },
  review: {
    requestStatus: RequestStatus,
  },
  auth: {
    data: AuthData | null,
    error: ErrorMessage,
    status: AuthStatus,
  },
};

export type {State};
