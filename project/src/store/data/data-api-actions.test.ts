import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../../services/api';
import {State} from '../../types/state';
import {APIRoute, RequestStatus} from '../../common/const';
import {
  getFavoriteOffersAction,
  getNearbyOffersAction,
  getOfferAction,
  getOffersAction,
  getReviewsAction,
  postFavoritesStatusAction,
  postReviewAction
} from './data-api-actions';
import {createMockRawOffer, createMockRawOffers} from '../../mocks/offers';
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
import {adaptOfferToClient, adaptReviewToClient} from '../../services/adapters';
import {datatype} from 'faker';
import {createMockRawReviews, createMockUserReview} from '../../mocks/reviews';

describe('Async API actions: Data', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  const mockRawOffer = createMockRawOffer();
  const mockRawOffers = createMockRawOffers();
  const mockOffer = adaptOfferToClient(mockRawOffer);
  const mockOffers = mockRawOffers.map(adaptOfferToClient);
  const mockRawReviews = createMockRawReviews();
  const mockReviews = mockRawReviews.map(adaptReviewToClient);
  const mockUserReview = createMockUserReview();
  const mockOfferIdParamValue = datatype.number().toString();

  it('should dispatch LoadOffer & SetOfferRequestStatus when GET /hotels/:id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.GetOffer(mockOfferIdParamValue))
      .reply(200, mockRawOffer);

    await store.dispatch(getOfferAction(mockOfferIdParamValue));

    expect(store.getActions()).toEqual([
      setOfferRequestStatus(RequestStatus.Loading),
      loadOffer(mockOffer),
      setOfferRequestStatus(RequestStatus.Success),
    ]);
  });

  it('should dispatch LoadOffers & SetOffersRequestStatus when GET /hotels', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.GetOffers())
      .reply(200, mockRawOffers);

    await store.dispatch(getOffersAction());

    expect(store.getActions()).toEqual([
      setOffersRequestStatus(RequestStatus.Loading),
      loadOffers(mockOffers),
      setOffersRequestStatus(RequestStatus.Success),
    ]);
  });

  it('should dispatch LoadNearbyOffers & SetNearbyOffersRequestStatus when GET /hotels/:id/nearby', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.GetNearbyOffers(mockOfferIdParamValue))
      .reply(200, mockRawOffers);

    await store.dispatch(getNearbyOffersAction(mockOfferIdParamValue));

    expect(store.getActions()).toEqual([
      setNearbyOffersRequestStatus(RequestStatus.Loading),
      loadNearbyOffers(mockOffers),
      setNearbyOffersRequestStatus(RequestStatus.Success),
    ]);
  });

  it('should dispatch LoadFavoriteOffers & SetFavoriteOffersRequestStatus when GET /favorite', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.GetFavoriteOffers())
      .reply(200, mockRawOffers);

    await store.dispatch(getFavoriteOffersAction());

    expect(store.getActions()).toEqual([
      setFavoriteOffersRequestStatus(RequestStatus.Loading),
      loadFavoriteOffers(mockOffers),
      setFavoriteOffersRequestStatus(RequestStatus.Success),
    ]);
  });

  it('should dispatch LoadReviews & SetReviewsRequestStatus when GET /comments/:id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.GetReviews(mockOfferIdParamValue))
      .reply(200, mockRawReviews);

    await store.dispatch(getReviewsAction(mockOfferIdParamValue));

    expect(store.getActions()).toEqual([
      setReviewsRequestStatus(RequestStatus.Loading),
      loadReviews(mockReviews),
      setReviewsRequestStatus(RequestStatus.Success),
    ]);
  });

  it('should dispatch LoadReviews & SetReviewRequestStatus when POST /comments/:id', async () => {
    const store = mockStore();

    mockAPI
      .onPost(APIRoute.PostReview(mockOfferIdParamValue))
      .reply(200, mockRawReviews);

    await store.dispatch(postReviewAction(mockOfferIdParamValue, mockUserReview));

    expect(store.getActions()).toEqual([
      setReviewRequestStatus(RequestStatus.Loading),
      loadReviews(mockReviews),
      setReviewRequestStatus(RequestStatus.Success),
    ]);
  });

  it('should dispatch UpdateAllOffers when POST /favorite/:id/:status', async () => {
    const store = mockStore();
    const status = datatype.number({min: 0, max: 1});
    const isOfferUpdate = true;

    mockAPI
      .onPost(APIRoute.PostFavoritesStatus(mockOfferIdParamValue, status))
      .reply(200, mockRawOffer);

    await store.dispatch(postFavoritesStatusAction(mockOfferIdParamValue, status, isOfferUpdate));

    expect(store.getActions()).toEqual([
      updateOffer(mockOffer),
      setOfferRequestStatus(RequestStatus.Updated),
      updateAllOffers(mockOffer),
      setNearbyOffersRequestStatus(RequestStatus.Updated),
      setOffersRequestStatus(RequestStatus.Updated),
      setFavoriteOffersRequestStatus(RequestStatus.Updated),
    ]);
  });
});
