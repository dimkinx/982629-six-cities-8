import {userInitialState, userReducer} from './user-reducer';
import {requireAuthorization, requireLogout, setAuthData, setAuthError, setCity, setSort} from './user-actions';
import {AuthStatus, CityType, ErrorMessage, SortingType} from '../../common/const';
import {createMockAuthData} from '../../mocks/auth-data';

describe('Reducer: user', () => {
  const mockActionType = 'UNKNOWN_ACTION';

  it('without additional parameters should return initial state', () => {
    expect(userReducer(void 0, {type: mockActionType}))
      .toEqual(userInitialState);
  });

  it('should set city value', () => {
    const mockCity = CityType.Amsterdam;

    expect(userReducer(userInitialState, setCity(mockCity)))
      .toEqual({
        ...userInitialState,
        city: mockCity,
      });
  });

  it('should set sorting value', () => {
    const mockSort = SortingType.HighToLow;

    expect(userReducer(userInitialState, setSort(mockSort)))
      .toEqual({
        ...userInitialState,
        sort: mockSort,
      });
  });

  it('should set auth data', () => {
    const mockAuthData = createMockAuthData();

    expect(userReducer(userInitialState, setAuthData(mockAuthData)))
      .toEqual({
        ...userInitialState,
        auth: {
          ...userInitialState.auth,
          data: mockAuthData,
        },
      });
  });

  it('should set auth status "AUTH"', () => {
    const mockAuthStatus = AuthStatus.Auth;

    expect(userReducer(userInitialState, requireAuthorization(mockAuthStatus)))
      .toEqual({
        ...userInitialState,
        auth: {
          ...userInitialState.auth,
          status: mockAuthStatus,
        },
      });
  });

  it('should set auth status "NO_AUTH"', () => {
    const mockAuthStatus = AuthStatus.NoAuth;

    expect(userReducer(userInitialState, requireLogout()))
      .toEqual({
        ...userInitialState,
        auth: {
          ...userInitialState.auth,
          status: mockAuthStatus,
        },
      });
  });

  it('should set auth error message', () => {
    const mockErrorMessage = ErrorMessage.NoFailure;

    expect(userReducer(userInitialState, setAuthError(mockErrorMessage)))
      .toEqual({
        ...userInitialState,
        auth: {
          ...userInitialState.auth,
          error: mockErrorMessage,
        },
      });
  });
});
