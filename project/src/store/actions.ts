import {ActionType, AuthStatus, CityType, FetchStatus, SortingType} from '../common/const';
import {
  SetCity,
  SetSorting,
  LoadOffers,
  LoadFavoriteOffers,
  SetOffersFetchStatus,
  SetFavoriteOffersFetchStatus, SetAuthData, SetAuthError
} from '../types/actions';
import {Offer} from '../types/offer';
import {AuthData} from '../types/auth-data';

const setCity = (city: CityType): SetCity => ({
  type: ActionType.SetCity,
  payload: city,
} as const);

const setSorting = (sorting: SortingType): SetSorting => ({
  type: ActionType.SetSorting,
  payload: sorting,
} as const);

const loadOffers = (offers: Offer[]): LoadOffers => ({
  type: ActionType.LoadOffers,
  payload: {
    data: offers,
  },
} as const);

const setOffersFetchStatus = (fetchStatus: FetchStatus): SetOffersFetchStatus => ({
  type: ActionType.SetOffersFetchStatus,
  payload: {
    fetchStatus: fetchStatus,
  },
} as const);

const loadFavoriteOffers = (favoriteOffers: Offer[]): LoadFavoriteOffers => ({
  type: ActionType.LoadFavoriteOffers,
  payload: {
    data: favoriteOffers,
  },
} as const);

const setFavoriteOffersFetchStatus = (fetchStatus: FetchStatus): SetFavoriteOffersFetchStatus => ({
  type: ActionType.SetFavoriteOffersFetchStatus,
  payload: {
    fetchStatus: fetchStatus,
  },
} as const);

const requireAuthorization = (authStatus: AuthStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

const setAuthData = (data: AuthData): SetAuthData => ({
  type: ActionType.SetAuthData,
  payload: {
    data: data,
  },
} as const);

const setAuthError = (error: string): SetAuthError => ({
  type: ActionType.SetAuthError,
  payload: {
    error: error,
  },
} as const);

export {
  setCity,
  setSorting,
  loadOffers,
  setOffersFetchStatus,
  loadFavoriteOffers,
  setFavoriteOffersFetchStatus,
  requireAuthorization,
  requireLogout,
  setAuthData,
  setAuthError
};
