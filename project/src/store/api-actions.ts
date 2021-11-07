import {ThunkActionResult} from '../types/actions';
import {
  loadFavoriteOffers,
  loadOffers,
  requireAuthorization,
  requireLogout, setFavoriteOffersFetchStatus,
  setOffersFetchStatus
} from './actions';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, ErrorMessage, FetchStatus} from '../common/const';
import {AuthData} from '../types/auth-data';
import {RawOffer} from '../types/offer';
import {adaptOfferToClient} from '../services/adapter';
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
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  }
);

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {
  fetchOffersAction,
  fetchFavoriteOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
