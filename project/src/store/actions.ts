import {ActionType, AuthStatus, CityType, ErrorMessage, FetchStatus, SortingType} from '../common/const';
import {
  SetCity,
  SetSorting,
  LoadOffers,
  LoadFavoriteOffers,
  SetOffersFetchStatus,
  SetFavoriteOffersFetchStatus,
  SetAuthData,
  SetAuthError,
  LoadReviews,
  SetReviewsFetchStatus,
  SetOfferFetchStatus,
  LoadOffer,
  LoadNearbyOffers,
  SetNearbyOffersFetchStatus
} from '../types/actions';
import {Offer} from '../types/offer';
import {AuthData} from '../types/auth-data';
import {Review} from '../types/review';

const setCity = (city: CityType): SetCity => ({
  type: ActionType.SetCity,
  payload: city,
} as const);

const setSorting = (sorting: SortingType): SetSorting => ({
  type: ActionType.SetSorting,
  payload: sorting,
} as const);

const loadOffer = (offer: Offer): LoadOffer => ({
  type: ActionType.LoadOffer,
  payload: {
    data: offer,
  },
} as const);

const setOfferFetchStatus = (fetchStatus: FetchStatus): SetOfferFetchStatus => ({
  type: ActionType.SetOfferFetchStatus,
  payload: {
    fetchStatus: fetchStatus,
  },
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

const loadNearbyOffers = (nearOffers: Offer[]): LoadNearbyOffers => ({
  type: ActionType.LoadNearbyOffers,
  payload: {
    data: nearOffers,
  },
} as const);

const setNearbyOffersFetchStatus = (fetchStatus: FetchStatus): SetNearbyOffersFetchStatus => ({
  type: ActionType.SetNearbyOffersFetchStatus,
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

const loadReviews = (reviews: Review[]): LoadReviews => ({
  type: ActionType.LoadReviews,
  payload: {
    data: reviews,
  },
} as const);

const setReviewsFetchStatus = (fetchStatus: FetchStatus): SetReviewsFetchStatus => ({
  type: ActionType.SetReviewsFetchStatus,
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

const setAuthData = (data: AuthData | null): SetAuthData => ({
  type: ActionType.SetAuthData,
  payload: {
    data: data,
  },
} as const);

const setAuthError = (error: ErrorMessage): SetAuthError => ({
  type: ActionType.SetAuthError,
  payload: {
    error: error,
  },
} as const);

export {
  setCity,
  setSorting,
  loadOffer,
  setOfferFetchStatus,
  loadOffers,
  setOffersFetchStatus,
  loadNearbyOffers,
  setNearbyOffersFetchStatus,
  loadFavoriteOffers,
  setFavoriteOffersFetchStatus,
  loadReviews,
  setReviewsFetchStatus,
  requireAuthorization,
  requireLogout,
  setAuthData,
  setAuthError
};
