import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {ActionType, AuthorizationStatus, CityType, SortingType} from '../common/const';
import {State} from './state';
import {Offer} from './offer';

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
  payload: Offer[],
  isDataLoaded: boolean,
};

type RequireAuthorization = {
  type: ActionType.RequireAuthorization,
  payload: AuthorizationStatus,
};

type RequireLogout = {
  type: ActionType.RequireLogout,
};

type Actions = SetCity | SetSorting | LoadOffers | RequireAuthorization | RequireLogout;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {SetCity, SetSorting, LoadOffers, Actions, ThunkActionResult, ThunkAppDispatch};
