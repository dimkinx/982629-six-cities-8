import {dataInitialState, dataReducer} from './data-reducer';
import {
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  updateOffer,
  loadOffers,
  loadReviews,
  setFavoriteOffersRequestStatus,
  setNearbyOffersRequestStatus,
  setOfferRequestStatus,
  setOffersRequestStatus,
  setReviewRequestStatus,
  setReviewsRequestStatus,
  updateAllOffers
} from './data-actions';
import {updateFavoriteOffers, updateOffers} from '../../common/utils';
import {createMockOffer, createMockOffers} from '../../mocks/offers';
import {createMockReviews} from '../../mocks/reviews';
import {RequestStatus} from '../../common/const';

describe('Reducer: user', () => {
  const mockActionType = 'UNKNOWN_ACTION';

  it('without additional parameters should return initial state', () => {
    expect(dataReducer(void 0, {type: mockActionType}))
      .toEqual(dataInitialState);
  });

  it('should set offer by load offer data', () => {
    const mockOffer = createMockOffer();

    expect(dataReducer(dataInitialState, loadOffer(mockOffer)))
      .toEqual({
        ...dataInitialState,
        offer: {
          ...dataInitialState.offer,
          data: mockOffer,
        },
      });
  });

  it('should update offer by set favorites status', () => {
    const mockOffer = createMockOffer();

    expect(dataReducer(dataInitialState, updateOffer(mockOffer)))
      .toEqual({
        ...dataInitialState,
        offer: {
          ...dataInitialState.offer,
          data: mockOffer,
        },
      });
  });

  it('should set offer "SUCCESS" request status', () => {
    const mockOfferRequestStatus = RequestStatus.Success;

    expect(dataReducer(dataInitialState, setOfferRequestStatus(mockOfferRequestStatus)))
      .toEqual({
        ...dataInitialState,
        offer: {
          ...dataInitialState.offer,
          requestStatus: mockOfferRequestStatus,
        },
      });
  });

  it('should set offers by load offers data', () => {
    const mockOffers = createMockOffers();

    expect(dataReducer(dataInitialState, loadOffers(mockOffers)))
      .toEqual({
        ...dataInitialState,
        offers: {
          ...dataInitialState.offers,
          data: mockOffers,
        },
      });
  });

  it('should set offers "SUCCESS" request status', () => {
    const mockOffersRequestStatus = RequestStatus.Success;

    expect(dataReducer(dataInitialState, setOffersRequestStatus(mockOffersRequestStatus)))
      .toEqual({
        ...dataInitialState,
        offers: {
          ...dataInitialState.offers,
          requestStatus: mockOffersRequestStatus,
        },
      });
  });

  it('should set nearby offers by load nearby offers data', () => {
    const mockNearbyOffers = createMockOffers();

    expect(dataReducer(dataInitialState, loadNearbyOffers(mockNearbyOffers)))
      .toEqual({
        ...dataInitialState,
        nearbyOffers: {
          ...dataInitialState.nearbyOffers,
          data: mockNearbyOffers,
        },
      });
  });

  it('should set nearby offers "SUCCESS" request status', () => {
    const mockNearbyOffersRequestStatus = RequestStatus.Success;

    expect(dataReducer(dataInitialState, setNearbyOffersRequestStatus(mockNearbyOffersRequestStatus)))
      .toEqual({
        ...dataInitialState,
        nearbyOffers: {
          ...dataInitialState.nearbyOffers,
          requestStatus: mockNearbyOffersRequestStatus,
        },
      });
  });

  it('should set favorite offers by load favorite offers data', () => {
    const mockFavoriteOffers = createMockOffers();

    expect(dataReducer(dataInitialState, loadFavoriteOffers(mockFavoriteOffers)))
      .toEqual({
        ...dataInitialState,
        favoriteOffers: {
          ...dataInitialState.favoriteOffers,
          data: mockFavoriteOffers,
        },
      });
  });

  it('should set favorite offers "SUCCESS" request status', () => {
    const mockFavoriteOffersRequestStatus = RequestStatus.Success;

    expect(dataReducer(dataInitialState, setFavoriteOffersRequestStatus(mockFavoriteOffersRequestStatus)))
      .toEqual({
        ...dataInitialState,
        favoriteOffers: {
          ...dataInitialState.favoriteOffers,
          requestStatus: mockFavoriteOffersRequestStatus,
        },
      });
  });

  it('should set reviews by load reviews data', () => {
    const mockReviews = createMockReviews();

    expect(dataReducer(dataInitialState, loadReviews(mockReviews)))
      .toEqual({
        ...dataInitialState,
        reviews: {
          ...dataInitialState.reviews,
          data: mockReviews,
        },
      });
  });

  it('should set reviews "SUCCESS" request status', () => {
    const mockReviewsRequestStatus = RequestStatus.Success;

    expect(dataReducer(dataInitialState, setReviewsRequestStatus(mockReviewsRequestStatus)))
      .toEqual({
        ...dataInitialState,
        reviews: {
          ...dataInitialState.reviews,
          requestStatus: mockReviewsRequestStatus,
        },
      });
  });

  it('should set review "SUCCESS" request status', () => {
    const mockReviewRequestStatus = RequestStatus.Success;

    expect(dataReducer(dataInitialState, setReviewRequestStatus(mockReviewRequestStatus)))
      .toEqual({
        ...dataInitialState,
        review: {
          requestStatus: mockReviewRequestStatus,
        },
      });
  });

  it('should update all offers by load updated offer data', () => {
    const mockUpdatedOffer = createMockOffer();

    expect(dataReducer(dataInitialState, updateAllOffers(mockUpdatedOffer)))
      .toEqual({
        ...dataInitialState,
        nearbyOffers: {
          ...dataInitialState.nearbyOffers,
          data: updateOffers(dataInitialState.nearbyOffers.data, mockUpdatedOffer),
        },
        offers: {
          ...dataInitialState.offers,
          data: updateOffers(dataInitialState.offers.data, mockUpdatedOffer),
        },
        favoriteOffers: {
          ...dataInitialState.favoriteOffers,
          data: updateFavoriteOffers(dataInitialState.favoriteOffers.data, mockUpdatedOffer),
        },
      });
  });
});
