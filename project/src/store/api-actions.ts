import {ThunkActionResult} from '../types/actions';
import {loadOffers, requireAuthorization, requireLogout} from './actions';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../common/const';
import {AuthData} from '../types/auth-data';
import {RawOffer} from '../types/offer';
import {adaptOfferToClient} from '../services/adapter';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<RawOffer[]>(APIRoute.Offers);
    dispatch(loadOffers(data.map(adaptOfferToClient)));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

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

export {fetchOffersAction, checkAuthAction, loginAction, logoutAction};
