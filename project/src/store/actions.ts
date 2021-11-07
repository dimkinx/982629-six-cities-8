import {ActionType, AuthorizationStatus, CityType, FetchStatus, SortingType} from '../common/const';
import {
  SetCity,
  SetSorting,
  LoadOffers,
  LoadFavoriteOffers,
  SetOffersFetchStatus,
  SetFavoriteOffersFetchStatus
} from '../types/actions';
import {Offer} from '../types/offer';

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

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export {
  setCity,
  setSorting,
  loadOffers,
  setOffersFetchStatus,
  loadFavoriteOffers,
  setFavoriteOffersFetchStatus,
  requireAuthorization,
  requireLogout};
