import {ActionType, AuthStatus, CityType, ErrorMessage, RequestStatus, SortingType} from '../common/const';
import {
  SetCity,
  SetSorting,
  LoadOffers,
  LoadFavoriteOffers,
  SetOffersRequestStatus,
  SetFavoriteOffersRequestStatus,
  SetAuthData,
  SetAuthError,
  LoadReviews,
  SetReviewsRequestStatus,
  SetOfferRequestStatus,
  LoadOffer,
  LoadNearbyOffers,
  SetNearbyOffersRequestStatus, SendReview, SetReviewRequestStatus
} from '../types/actions';
import {Offer} from '../types/offer';
import {AuthData} from '../types/auth-data';
import {Review, UserReview} from '../types/review';

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

const setOfferRequestStatus = (requestStatus: RequestStatus): SetOfferRequestStatus => ({
  type: ActionType.SetOfferRequestStatus,
  payload: {
    requestStatus: requestStatus,
  },
} as const);

const loadOffers = (offers: Offer[]): LoadOffers => ({
  type: ActionType.LoadOffers,
  payload: {
    data: offers,
  },
} as const);

const setOffersRequestStatus = (requestStatus: RequestStatus): SetOffersRequestStatus => ({
  type: ActionType.SetOffersRequestStatus,
  payload: {
    requestStatus: requestStatus,
  },
} as const);

const loadNearbyOffers = (nearOffers: Offer[]): LoadNearbyOffers => ({
  type: ActionType.LoadNearbyOffers,
  payload: {
    data: nearOffers,
  },
} as const);

const setNearbyOffersRequestStatus = (requestStatus: RequestStatus): SetNearbyOffersRequestStatus => ({
  type: ActionType.SetNearbyOffersRequestStatus,
  payload: {
    requestStatus: requestStatus,
  },
} as const);

const loadFavoriteOffers = (favoriteOffers: Offer[]): LoadFavoriteOffers => ({
  type: ActionType.LoadFavoriteOffers,
  payload: {
    data: favoriteOffers,
  },
} as const);

const setFavoriteOffersRequestStatus = (requestStatus: RequestStatus): SetFavoriteOffersRequestStatus => ({
  type: ActionType.SetFavoriteOffersRequestStatus,
  payload: {
    requestStatus: requestStatus,
  },
} as const);

const loadReviews = (reviews: Review[]): LoadReviews => ({
  type: ActionType.LoadReviews,
  payload: {
    data: reviews,
  },
} as const);

const setReviewsRequestStatus = (requestStatus: RequestStatus): SetReviewsRequestStatus => ({
  type: ActionType.SetReviewsRequestStatus,
  payload: {
    requestStatus: requestStatus,
  },
} as const);

const sendReview = (review: UserReview): SendReview => ({
  type: ActionType.SendReview,
  payload: {
    data: review,
  },
} as const);

const setReviewRequestStatus = (requestStatus: RequestStatus): SetReviewRequestStatus => ({
  type: ActionType.SetReviewRequestStatus,
  payload: {
    requestStatus: requestStatus,
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
  setOfferRequestStatus,
  loadOffers,
  setOffersRequestStatus,
  loadNearbyOffers,
  setNearbyOffersRequestStatus,
  loadFavoriteOffers,
  setFavoriteOffersRequestStatus,
  loadReviews,
  setReviewsRequestStatus,
  sendReview,
  setReviewRequestStatus,
  requireAuthorization,
  requireLogout,
  setAuthData,
  setAuthError
};
