import {CityType, SortingType, ActionType, AuthStatus, ErrorMessage} from '../../common/const';
import {SetCity, SetSorting, SetAuthData, SetAuthError} from '../../types/actions';
import {AuthData} from '../../types/auth-data';

const setCity = (city: CityType): SetCity => ({
  type: ActionType.SetCity,
  payload: city,
} as const);

const setSorting = (sorting: SortingType): SetSorting => ({
  type: ActionType.SetSorting,
  payload: sorting,
} as const);

const requireAuthorization = (authStatus: AuthStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

const setAuthData = (data: AuthData | null): SetAuthData => ({
  type: ActionType.SetAuthData,
  payload: {
    data: data,
  },
} as const);

const setAuthError = (error: ErrorMessage): SetAuthError => ({
  type: ActionType.SetAuthError,
  payload: {
    error: error,
  },
} as const);

export {
  setCity,
  setSorting,
  requireAuthorization,
  requireLogout,
  setAuthData,
  setAuthError
};
