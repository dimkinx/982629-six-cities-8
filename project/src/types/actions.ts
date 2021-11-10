import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {ActionType, AuthStatus, CityType, ErrorMessage, RequestStatus, SortingType} from '../common/const';
import {State} from './state';
import {Offer} from './offer';
import {AuthData} from './auth-data';
import {Review, UserReview} from './review';

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

type SetOfferRequestStatus = {
  type: ActionType.SetOfferRequestStatus,
  payload: {
    requestStatus: RequestStatus,
  },
};

type LoadOffers = {
  type: ActionType.LoadOffers,
  payload: {
    data: Offer[],
  },
};

type SetOffersRequestStatus = {
  type: ActionType.SetOffersRequestStatus,
  payload: {
    requestStatus: RequestStatus,
  },
};

type LoadNearbyOffers = {
  type: ActionType.LoadNearbyOffers,
  payload: {
    data: Offer[],
  },
};

type SetNearbyOffersRequestStatus = {
  type: ActionType.SetNearbyOffersRequestStatus,
  payload: {
    requestStatus: RequestStatus,
  },
};

type LoadFavoriteOffers = {
  type: ActionType.LoadFavoriteOffers,
  payload: {
    data: Offer[],
  },
};

type SetFavoriteOffersRequestStatus = {
  type: ActionType.SetFavoriteOffersRequestStatus,
  payload: {
    requestStatus: RequestStatus,
  },
};

type LoadReviews = {
  type: ActionType.LoadReviews,
  payload: {
    data: Review[],
  },
};

type SetReviewsRequestStatus = {
  type: ActionType.SetReviewsRequestStatus,
  payload: {
    requestStatus: RequestStatus,
  },
};

type SendReview = {
  type: ActionType.SendReview,
  payload: {
    data: UserReview,
  },
};

type SetReviewRequestStatus = {
  type: ActionType.SetReviewRequestStatus,
  payload: {
    requestStatus: RequestStatus,
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
  | SetOfferRequestStatus
  | LoadOffers
  | SetOffersRequestStatus
  | LoadNearbyOffers
  | SetNearbyOffersRequestStatus
  | LoadFavoriteOffers
  | SetFavoriteOffersRequestStatus
  | LoadReviews
  | SetReviewsRequestStatus
  | SendReview
  | SetReviewRequestStatus
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
  SetOfferRequestStatus,
  LoadOffers,
  SetOffersRequestStatus,
  LoadNearbyOffers,
  SetNearbyOffersRequestStatus,
  LoadFavoriteOffers,
  SetFavoriteOffersRequestStatus,
  LoadReviews,
  SetReviewsRequestStatus,
  SendReview,
  SetReviewRequestStatus,
  SetAuthData,
  SetAuthError,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
