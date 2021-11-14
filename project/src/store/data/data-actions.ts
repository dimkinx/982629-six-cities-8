import {createAction} from '@reduxjs/toolkit';
import {ActionType, RequestStatus} from '../../common/const';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

const loadOffer = createAction(
  ActionType.LoadOffer,
  (offer: Offer | null) => ({
    payload: {
      offer,
    },
  }),
);

const setOfferRequestStatus = createAction(
  ActionType.SetOfferRequestStatus,
  (requestStatus: RequestStatus) => ({
    payload: {
      requestStatus,
    },
  }),
);

const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

const setOffersRequestStatus = createAction(
  ActionType.SetOffersRequestStatus,
  (requestStatus: RequestStatus) => ({
    payload: {
      requestStatus,
    },
  }),
);

const loadNearbyOffers = createAction(
  ActionType.LoadNearbyOffers,
  (nearbyOffers: Offer[]) => ({
    payload: {
      nearbyOffers,
    },
  }),
);

const setNearbyOffersRequestStatus = createAction(
  ActionType.SetNearbyOffersRequestStatus,
  (requestStatus: RequestStatus) => ({
    payload: {
      requestStatus,
    },
  }),
);

const loadFavoriteOffers = createAction(
  ActionType.LoadFavoriteOffers,
  (favoriteOffers: Offer[]) => ({
    payload: {
      favoriteOffers,
    },
  }),
);

const setFavoriteOffersRequestStatus = createAction(
  ActionType.SetFavoriteOffersRequestStatus,
  (requestStatus: RequestStatus) => ({
    payload: {
      requestStatus,
    },
  }),
);

const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: Review[]) => ({
    payload: {
      reviews,
    },
  }),
);

const setReviewsRequestStatus = createAction(
  ActionType.SetReviewsRequestStatus,
  (requestStatus: RequestStatus) => ({
    payload: {
      requestStatus,
    },
  }),
);

const setReviewRequestStatus = createAction(
  ActionType.SetReviewRequestStatus,
  (requestStatus: RequestStatus) => ({
    payload: {
      requestStatus,
    },
  }),
);

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
