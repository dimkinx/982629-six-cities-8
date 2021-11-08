import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {ActionType, AuthStatus, CityType, FetchStatus, SortingType} from '../common/const';
import {State} from './state';
import {Offer} from './offer';
import {AuthData} from './auth-data';

type SetCity = {
  type: ActionType.SetCity,
  payload: CityType,
};

type SetSorting = {
  type: ActionType.SetSorting,
  payload: SortingType,
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
    error: string,
  },
};

type Actions =
  | SetCity
  | SetSorting
  | LoadOffers
  | SetOffersFetchStatus
  | LoadFavoriteOffers
  | SetFavoriteOffersFetchStatus
  | RequireAuthorization
  | RequireLogout
  | SetAuthData
  | SetAuthError;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  SetCity,
  SetSorting,
  LoadOffers,
  SetOffersFetchStatus,
  LoadFavoriteOffers,
  SetFavoriteOffersFetchStatus,
  SetAuthData,
  SetAuthError,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
