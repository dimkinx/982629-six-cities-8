import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../../services/api';
import {checkAuthAction, loginAction, logoutAction} from './user-api-actions';
import {State} from '../../types/state';
import {APIRoute, AUTH_TOKEN_KEY_NAME, AuthStatus, ErrorMessage} from '../../common/const';
import {requireAuthorization, requireLogout, setAuthData, setAuthError} from './user-actions';
import {createMockRawAuthData, createMockUserAuthData} from '../../mocks/auth-data';
import {adaptAuthDataToClient} from '../../services/adapters';

describe('Async API actions: User', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  const mockRawAuthData = createMockRawAuthData();
  const mockAuthData = adaptAuthDataToClient(mockRawAuthData);
  const mockUserAuthData = createMockUserAuthData();

  it('should set status is "AUTH" when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Login())
      .reply(200, mockRawAuthData);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthStatus.Auth),
      setAuthData(mockAuthData),
      setAuthError(ErrorMessage.NoFailure),
    ]);
  });

  it('should set status is "NO_AUTH" when server return 401', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Login())
      .reply(401);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthStatus.NoAuth),
    ]);
  });

  it('should dispatch RequiredAuthorization when POST /login', async () => {
    const store = mockStore();

    mockAPI
      .onPost(APIRoute.Login(), mockUserAuthData)
      .reply(200, mockRawAuthData);

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(mockUserAuthData));

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthStatus.Auth),
      setAuthData(mockAuthData),
      setAuthError(ErrorMessage.NoFailure),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, mockAuthData && mockAuthData.token);
  });

  it('should dispatch RequireLogout when DELETE /login', async () => {
    const store = mockStore();

    mockAPI
      .onDelete(APIRoute.Logout())
      .reply(204);

    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([
      requireLogout(),
      setAuthData(null),
      requireAuthorization(AuthStatus.NoAuth),
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME);
  });
});
