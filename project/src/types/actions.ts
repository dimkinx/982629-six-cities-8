import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {ActionType, AuthStatus, CityType, ErrorMessage, FetchStatus, SortingType} from '../common/const';
import {State} from './state';
import {Offer} from './offer';
import {AuthData} from './auth-data';
import {Review} from './review';

type SetCity = {
  type: ActionType.SetCity,
  payload: CityType,
};

type SetSorting = {
  type: ActionType.SetSorting,
  payload: SortingType,
};

type LoadOffer = {
  type: ActionType.LoadOffer,
  payload: {
    data: Offer,
  },
};

type SetOfferFetchStatus = {
  type: ActionType.SetOfferFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

type LoadOffers = {
  type: ActionType.LoadOffers,
  payload: {
    data: Offer[],
  },
};

type SetOffersFetchStatus = {
  type: ActionType.SetOffersFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

type LoadNearbyOffers = {
  type: ActionType.LoadNearbyOffers,
  payload: {
    data: Offer[],
  },
};

type SetNearbyOffersFetchStatus = {
  type: ActionType.SetNearbyOffersFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

type LoadFavoriteOffers = {
  type: ActionType.LoadFavoriteOffers,
  payload: {
    data: Offer[],
  },
};

type SetFavoriteOffersFetchStatus = {
  type: ActionType.SetFavoriteOffersFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

type LoadReviews = {
  type: ActionType.LoadReviews,
  payload: {
    data: Review[],
  },
};

type SetReviewsFetchStatus = {
  type: ActionType.SetReviewsFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

type RequireAuthorization = {
  type: ActionType.RequireAuthorization,
  payload: AuthStatus,
};

type RequireLogout = {
  type: ActionType.RequireLogout,
};

type SetAuthData = {
  type: ActionType.SetAuthData,
  payload: {
    data: AuthData,
  },
};

type SetAuthError = {
  type: ActionType.SetAuthError,
  payload: {
    error: ErrorMessage,
  },
};

type Actions =
  | SetCity
  | SetSorting
  | LoadOffer
  | SetOfferFetchStatus
  | LoadOffers
  | SetOffersFetchStatus
  | LoadNearbyOffers
  | SetNearbyOffersFetchStatus
  | LoadFavoriteOffers
  | SetFavoriteOffersFetchStatus
  | LoadReviews
  | SetReviewsFetchStatus
  | RequireAuthorization
  | RequireLogout
  | SetAuthData
  | SetAuthError;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  SetCity,
  SetSorting,
  LoadOffer,
  SetOfferFetchStatus,
  LoadOffers,
  SetOffersFetchStatus,
  LoadNearbyOffers,
  SetNearbyOffersFetchStatus,
  LoadFavoriteOffers,
  SetFavoriteOffersFetchStatus,
  LoadReviews,
  SetReviewsFetchStatus,
  SetAuthData,
  SetAuthError,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
