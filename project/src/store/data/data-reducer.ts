import {createReducer} from '@reduxjs/toolkit';
import {RequestStatus} from '../../common/const';
import {DataState} from '../../types/state';
import {
  loadOffer,
  setOfferRequestStatus,
  loadOffers,
  setOffersRequestStatus,
  loadFavoriteOffers,
  setFavoriteOffersRequestStatus,
  loadNearbyOffers,
  setNearbyOffersRequestStatus,
  loadReviews,
  setReviewsRequestStatus,
  setReviewRequestStatus
} from './data-actions';

const initialState: DataState = {
  offer: {
    data: null,
    requestStatus: RequestStatus.Unknown,
  },
  offers: {
    data: [],
    requestStatus: RequestStatus.Unknown,
  },
  nearbyOffers: {
    data: [],
    requestStatus: RequestStatus.Unknown,
  },
  favoriteOffers: {
    data: [],
    requestStatus: RequestStatus.Unknown,
  },
  reviews: {
    data: [],
    requestStatus: RequestStatus.Unknown,
  },
  review: {
    requestStatus: RequestStatus.Unknown,
  },
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffer, (state, action) => {
      state.offer.data = action.payload.offer;
    })
    .addCase(setOfferRequestStatus, (state, action) => {
      state.offer.requestStatus = action.payload.requestStatus;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers.data = action.payload.offers;
    })
    .addCase(setOffersRequestStatus, (state, action) => {
      state.offers.requestStatus = action.payload.requestStatus;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers.data = action.payload.nearbyOffers;
    })
    .addCase(setNearbyOffersRequestStatus, (state, action) => {
      state.nearbyOffers.requestStatus = action.payload.requestStatus;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers.data = action.payload.favoriteOffers;
    })
    .addCase(setFavoriteOffersRequestStatus, (state, action) => {
      state.favoriteOffers.requestStatus = action.payload.requestStatus;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews.data = action.payload.reviews;
    })
    .addCase(setReviewsRequestStatus, (state, action) => {
      state.reviews.requestStatus = action.payload.requestStatus;
    })
    .addCase(setReviewRequestStatus, (state, action) => {
      state.review.requestStatus = action.payload.requestStatus;
    });
});

export {dataReducer};
