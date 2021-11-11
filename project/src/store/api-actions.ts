import {ThunkActionResult} from '../types/actions';
import {
  loadFavoriteOffers, loadNearbyOffers,
  loadOffer,
  loadOffers, loadReviews,
  requireAuthorization,
  requireLogout,
  setAuthData,
  setAuthError,
  setFavoriteOffersRequestStatus,
  setNearbyOffersRequestStatus,
  setOfferRequestStatus,
  setOffersRequestStatus,
  setReviewRequestStatus,
  setReviewsRequestStatus
} from './actions';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthStatus, ErrorMessage, RequestStatus} from '../common/const';
import {RawAuthData, UserAuthData} from '../types/auth-data';
import {RawOffer} from '../types/offer';
import {adaptAuthDataToClient, adaptOfferToClient, adaptReviewToClient} from '../services/adapters';
import {toast} from 'react-toastify';
import {RawReview, UserReview} from '../types/review';

const getOfferAction = (id: string): ThunkActionResult => (
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

const getNearbyOffersAction = (id: string): ThunkActionResult => (
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

const getReviewsAction = (id: string): ThunkActionResult => (
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

const postReviewAction = (id: string, review: UserReview): ThunkActionResult => (
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

const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login())
      .then(({data: rawAuthData}) => {
        dispatch(requireAuthorization(AuthStatus.Auth));
        dispatch(setAuthData(adaptAuthDataToClient(rawAuthData)));
        dispatch(setAuthError(ErrorMessage.NoFailure));
      })
      .catch((error) => {
        dispatch(setAuthError(error.message));
      });
  }
);

const loginAction = ({login: email, password}: UserAuthData): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.post<RawAuthData>(APIRoute.Login(), {email, password})
      .then(({data: rawAuthData}) => {
        const authData = adaptAuthDataToClient(rawAuthData);
        authData && saveToken(authData.token);
        dispatch(requireAuthorization(AuthStatus.Auth));
        dispatch(setAuthData(authData));
        dispatch(setAuthError(ErrorMessage.NoFailure));
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.error : error.message;
        dispatch(setAuthError(errorMessage));
        toast.error(errorMessage);
      });
  }
);

const logoutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout())
      .then(() => {
        dropToken();
        dispatch(requireLogout());
        dispatch(setAuthData(null));
        dispatch(requireAuthorization(AuthStatus.NoAuth));
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.error : error.message;
        dispatch(setAuthError(errorMessage));
        toast.error(errorMessage);
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
  checkAuthAction,
  loginAction,
  logoutAction
};
