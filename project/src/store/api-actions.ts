import {ThunkActionResult} from '../types/actions';
import {
  loadFavoriteOffers,
  loadOffers,
  requireAuthorization,
  requireLogout, setAuthData, setAuthError, setFavoriteOffersFetchStatus,
  setOffersFetchStatus
} from './actions';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthStatus, ErrorMessage, FetchStatus} from '../common/const';
import {RawAuthData, UserAuthData} from '../types/auth-data';
import {RawOffer} from '../types/offer';
import {adaptAuthDataToClient, adaptOfferToClient} from '../services/adapters';
import {toast} from 'react-toastify';

const fetchOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOffersFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.Offers)
      .then(({data}) => {
        dispatch(loadOffers(data.map(adaptOfferToClient)));
        dispatch(setOffersFetchStatus(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setOffersFetchStatus(FetchStatus.Fail));
        toast.error(ErrorMessage.FailLoadOffers);
      });
  }
);

const fetchFavoriteOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFavoriteOffersFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.FavoriteOffers)
      .then(({data}) => {
        dispatch(loadFavoriteOffers(data.map(adaptOfferToClient)));
        dispatch(setFavoriteOffersFetchStatus(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setFavoriteOffersFetchStatus(FetchStatus.Fail));
        toast.error(ErrorMessage.FailLoadFavoriteOffers);
      });
  }
);

const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthStatus.Auth));
      })
      .catch((error) => {
        dispatch(setAuthError(error.message));
      });
  }
);

const loginAction = ({login: email, password}: UserAuthData): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.post<RawAuthData>(APIRoute.Login, {email, password})
      .then(({data: rawAuthData}) => {
        const authData = adaptAuthDataToClient(rawAuthData);
        authData && saveToken(authData.token);
        dispatch(requireAuthorization(AuthStatus.Auth));
        dispatch(setAuthData(authData));
        dispatch(setAuthError(''));
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.error : error.message;
        dispatch(setAuthError(errorMessage));
        toast.error(errorMessage);
      });
  }
);

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(setAuthData(null));
    dispatch(requireAuthorization(AuthStatus.NoAuth));
  };

export {
  fetchOffersAction,
  fetchFavoriteOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
