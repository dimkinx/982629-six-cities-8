import {State} from '../../types/state';
import {createSelector} from 'reselect';
import {getFilteredOffersByCity, getSortedOffersByType} from '../../common/utils';
import {getCity, getSorting} from '../user/user-selectors';
import {Offer} from '../../types/offer';
import {PropertyParams, RequestStatus} from '../../common/const';
import {Review} from '../../types/review';
import {compareReviewsByDate} from '../../common/date-time-utils';

const getOffer = (state: State): Offer | null => state.data.offer.data;

const getOfferRequestStatus = (state: State): RequestStatus => state.data.offer.requestStatus;

const getOffers = (state: State): Offer[] => state.data.offers.data;

const getOffersRequestStatus = (state: State): RequestStatus => state.data.offers.requestStatus;

const getFavoriteOffers = (state: State): Offer[] => state.data.favoriteOffers.data;

const getFavoriteOffersRequestStatus = (state: State): RequestStatus => state.data.favoriteOffers.requestStatus;

const getNearbyOffers = (state: State): Offer[] => state.data.nearbyOffers.data;

const getNearbyOffersRequestStatus = (state: State): RequestStatus => state.data.nearbyOffers.requestStatus;

const getReviews = (state: State): Review[] => state.data.reviews.data;

const getReviewsRequestStatus = (state: State): RequestStatus => state.data.reviews.requestStatus;

const getReviewRequestStatus = (state: State): RequestStatus => state.data.review.requestStatus;

const getIsReviewLoading = (state: State): boolean => state.data.review.requestStatus === RequestStatus.Loading;

const getSortedReviews = createSelector(
  [getReviews],
  (reviews) => reviews.slice(0, PropertyParams.ReviewsMaxCount).sort(compareReviewsByDate),
);

const getFilteredOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => getFilteredOffersByCity(offers, city),
);

const getSortedOffers = createSelector(
  [getFilteredOffers, getSorting],
  (offers, sortingType) => getSortedOffersByType(offers, sortingType),
);

export {
  getOffer,
  getOfferRequestStatus,
  getOffers,
  getOffersRequestStatus,
  getFavoriteOffers,
  getFavoriteOffersRequestStatus,
  getNearbyOffers,
  getNearbyOffersRequestStatus,
  getReviewsRequestStatus,
  getReviewRequestStatus,
  getIsReviewLoading,
  getSortedReviews,
  getFilteredOffers,
  getSortedOffers
};
