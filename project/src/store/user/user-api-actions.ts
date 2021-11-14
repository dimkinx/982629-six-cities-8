import {toast} from 'react-toastify';
import {requireAuthorization, requireLogout, setAuthData, setAuthError} from './user-actions';
import {saveToken, dropToken} from '../../services/token';
import {adaptAuthDataToClient} from '../../services/adapters';
import {APIRoute, AuthStatus, ErrorMessage} from '../../common/const';
import {RawAuthData, UserAuthData} from '../../types/auth-data';
import {ThunkActionResult} from '../../types/actions';

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

export {checkAuthAction, loginAction, logoutAction};
