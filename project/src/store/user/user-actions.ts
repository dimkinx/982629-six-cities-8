import {createAction} from '@reduxjs/toolkit';
import {CityType, SortingType, ActionType, AuthStatus, ErrorMessage} from '../../common/const';
import {AuthData} from '../../types/auth-data';

const setCity = createAction(
  ActionType.SetCity,
  (city: CityType) => ({
    payload: {
      city,
    },
  }),
);

const setSort = createAction(
  ActionType.SetSorting,
  (sorting: SortingType) => ({
    payload: {
      sorting,
    },
  }),
);

const setAuthData = createAction(
  ActionType.SetAuthData,
  (data: AuthData | null) => ({
    payload: {
      data,
    },
  }),
);

const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthStatus) => ({
    payload: {
      authStatus,
    },
  }),
);

const requireLogout = createAction(ActionType.RequireLogout);

const setAuthError = createAction(
  ActionType.SetAuthError,
  (error: ErrorMessage | string) => ({
    payload: {
      error,
    },
  }),
);

export {
  setCity,
  setSort,
  requireAuthorization,
  requireLogout,
  setAuthData,
  setAuthError
};
