import {toast} from 'react-toastify';
import {
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  loadReviews,
  setFavoriteOffersRequestStatus,
  setNearbyOffersRequestStatus,
  setOfferRequestStatus,
  setOffersRequestStatus,
  setReviewRequestStatus,
  setReviewsRequestStatus,
  updateAllOffers,
  updateOffer
} from './data-actions';
import {adaptOfferToClient, adaptReviewToClient} from '../../services/adapters';
import {APIRoute, ErrorMessage, RequestStatus} from '../../common/const';
import {OfferIdParamValue, RawOffer} from '../../types/offer';
import {RawReview, UserReview} from '../../types/review';
import {ThunkActionResult} from '../../types/thunk-action';

const getOfferAction = (id: OfferIdParamValue): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOfferRequestStatus(RequestStatus.Loading));
    await api.get<RawOffer>(APIRoute.GetOffer(id))
      .then(({data}) => {
        dispatch(loadOffer(adaptOfferToClient(data)));
        dispatch(setOfferRequestStatus(RequestStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setOfferRequestStatus(response && response.status === 404 ? RequestStatus.NotFound : RequestStatus.Fail));
        !response && toast.error(ErrorMessage.FailToLoadOffer);
      });
  }
);

const getOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOffersRequestStatus(RequestStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.GetOffers())
      .then(({data}) => {
        dispatch(loadOffers(data.map(adaptOfferToClient)));
        dispatch(setOffersRequestStatus(RequestStatus.Success));
      })
      .catch(() => {
        dispatch(setOffersRequestStatus(RequestStatus.Fail));
        toast.error(ErrorMessage.FailToLoadOffers);
      });
  }
);

const getNearbyOffersAction = (id: OfferIdParamValue): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setNearbyOffersRequestStatus(RequestStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.GetNearbyOffers(id))
      .then(({data}) => {
        dispatch(loadNearbyOffers(data.map(adaptOfferToClient)));
        dispatch(setNearbyOffersRequestStatus(RequestStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setNearbyOffersRequestStatus(RequestStatus.Fail));
        !response && toast.error(ErrorMessage.FailToLoadNearbyOffers);
      });
  }
);

const getFavoriteOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFavoriteOffersRequestStatus(RequestStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.GetFavoriteOffers())
      .then(({data}) => {
        dispatch(loadFavoriteOffers(data.map(adaptOfferToClient)));
        dispatch(setFavoriteOffersRequestStatus(RequestStatus.Success));
      })
      .catch(() => {
        dispatch(setFavoriteOffersRequestStatus(RequestStatus.Fail));
        toast.error(ErrorMessage.FailToLoadFavoriteOffers);
      });
  }
);

const getReviewsAction = (id: OfferIdParamValue): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setReviewsRequestStatus(RequestStatus.Loading));
    await api.get<RawReview[]>(APIRoute.GetReviews(id))
      .then(({data}) => {
        dispatch(loadReviews(data.map(adaptReviewToClient)));
        dispatch(setReviewsRequestStatus(RequestStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setReviewsRequestStatus(RequestStatus.Fail));
        !response && toast.error(ErrorMessage.FailToLoadReviews);
      });
  }
);

const postReviewAction = (id: OfferIdParamValue, review: UserReview): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setReviewRequestStatus(RequestStatus.Loading));
    await api.post<RawReview[]>(APIRoute.PostReview(id), review)
      .then(({data}) => {
        dispatch(loadReviews(data.map(adaptReviewToClient)));
        dispatch(setReviewRequestStatus(RequestStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setReviewRequestStatus(RequestStatus.Fail));
        toast.error(response && response.status === 400 ? response.data.error : ErrorMessage.FailToSendReview);
      });
  }
);

const postFavoritesStatusAction = (id: OfferIdParamValue, status: number, isOfferUpdate: boolean): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.post<RawOffer>(APIRoute.PostFavoritesStatus(id, status))
      .then(({data}) => {
        if (isOfferUpdate) {
          dispatch(updateOffer(adaptOfferToClient(data)));
          dispatch(setOfferRequestStatus(RequestStatus.Updated));
        }
        dispatch(updateAllOffers(adaptOfferToClient(data)));
        dispatch(setNearbyOffersRequestStatus(RequestStatus.Updated));
        dispatch(setOffersRequestStatus(RequestStatus.Updated));
        dispatch(setFavoriteOffersRequestStatus(RequestStatus.Updated));
      })
      .catch(() => {
        toast.error(status ? ErrorMessage.FailedToAddToFavorites : ErrorMessage.FailedToRemoveFromFavorites);
      });
  }
);

export {
  getOfferAction,
  getOffersAction,
  getNearbyOffersAction,
  getFavoriteOffersAction,
  getReviewsAction,
  postReviewAction,
  postFavoritesStatusAction
};
