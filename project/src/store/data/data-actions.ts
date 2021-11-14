import {ActionType, RequestStatus} from '../../common/const';
import {
  LoadOffer,
  SetOfferRequestStatus,
  LoadOffers,
  SetOffersRequestStatus,
  LoadFavoriteOffers,
  SetFavoriteOffersRequestStatus,
  LoadNearbyOffers,
  SetNearbyOffersRequestStatus,
  LoadReviews,
  SetReviewsRequestStatus,
  SetReviewRequestStatus
} from '../../types/actions';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

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

const setReviewRequestStatus = (requestStatus: RequestStatus): SetReviewRequestStatus => ({
  type: ActionType.SetReviewRequestStatus,
  payload: {
    requestStatus: requestStatus,
  },
} as const);

export {
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
  setReviewRequestStatus
};
