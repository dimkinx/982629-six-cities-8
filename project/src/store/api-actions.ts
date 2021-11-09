import {ThunkActionResult} from '../types/actions';
import {
  loadFavoriteOffers, loadNearbyOffers,
  loadOffer,
  loadOffers, loadReviews,
  requireAuthorization,
  requireLogout,
  setAuthData,
  setAuthError,
  setFavoriteOffersFetchStatus,
  setNearbyOffersFetchStatus,
  setOfferFetchStatus,
  setOffersFetchStatus, setReviewsFetchStatus
} from './actions';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthStatus, ErrorMessage, FetchStatus} from '../common/const';
import {RawAuthData, UserAuthData} from '../types/auth-data';
import {RawOffer} from '../types/offer';
import {adaptAuthDataToClient, adaptOfferToClient, adaptReviewToClient} from '../services/adapters';
import {toast} from 'react-toastify';
import {RawReview} from '../types/review';

const fetchOfferAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOfferFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer>(APIRoute.Offer(id))
      .then(({data}) => {
        dispatch(loadOffer(adaptOfferToClient(data)));
        dispatch(setOfferFetchStatus(FetchStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setOfferFetchStatus(response && response.status === 404 ? FetchStatus.NotFound : FetchStatus.Fail));
        !response && toast.error(ErrorMessage.FailToLoadOffer);
      });
  }
);

const fetchOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOffersFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.Offers())
      .then(({data}) => {
        dispatch(loadOffers(data.map(adaptOfferToClient)));
        dispatch(setOffersFetchStatus(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setOffersFetchStatus(FetchStatus.Fail));
        toast.error(ErrorMessage.FailToLoadOffers);
      });
  }
);

const fetchNearbyOffersAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setNearbyOffersFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.NearbyOffers(id))
      .then(({data}) => {
        dispatch(loadNearbyOffers(data.map(adaptOfferToClient)));
        dispatch(setNearbyOffersFetchStatus(FetchStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setNearbyOffersFetchStatus(FetchStatus.Fail));
        !response && toast.error(ErrorMessage.FailToLoadNearbyOffers);
      });
  }
);

const fetchFavoriteOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFavoriteOffersFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.FavoriteOffers())
      .then(({data}) => {
        dispatch(loadFavoriteOffers(data.map(adaptOfferToClient)));
        dispatch(setFavoriteOffersFetchStatus(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setFavoriteOffersFetchStatus(FetchStatus.Fail));
        toast.error(ErrorMessage.FailToLoadFavoriteOffers);
      });
  }
);

const fetchReviewsAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setReviewsFetchStatus(FetchStatus.Loading));
    await api.get<RawReview[]>(APIRoute.Reviews(id))
      .then(({data}) => {
        dispatch(loadReviews(data.map(adaptReviewToClient)));
        dispatch(setReviewsFetchStatus(FetchStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setReviewsFetchStatus(FetchStatus.Fail));
        !response && toast.error(ErrorMessage.FailToLoadReviews);
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
  fetchOfferAction,
  fetchOffersAction,
  fetchNearbyOffersAction,
  fetchFavoriteOffersAction,
  fetchReviewsAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
