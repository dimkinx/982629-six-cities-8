import {State} from '../../types/state';
import {createSelector} from 'reselect';
import {getFilteredOffersByCity, getOfferCities, getSortedOffersByType} from '../../common/utils';
import {getCity, getSorting} from '../user/user-selectors';
import {Offer} from '../../types/offer';
import {CityType, PropertyParam, RequestStatus} from '../../common/const';
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

const getIsFavoriteOffersEmpty = createSelector(
  [getFavoriteOffers],
  (favoriteOffers): boolean => !favoriteOffers.length,
);

const getFavoriteOffersCities = createSelector(
  [getFavoriteOffers],
  (favoriteOffers): CityType[] => !favoriteOffers.length ? [] : getOfferCities(favoriteOffers),
);

const getSortedReviews = createSelector(
  [getReviews],
  (reviews) => [...reviews].sort(compareReviewsByDate).slice(0, PropertyParam.ReviewsMaxCount),
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
  getIsFavoriteOffersEmpty,
  getFavoriteOffersCities,
  getSortedReviews,
  getFilteredOffers,
  getSortedOffers
};
