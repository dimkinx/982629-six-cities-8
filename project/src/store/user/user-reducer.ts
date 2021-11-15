import {createReducer} from '@reduxjs/toolkit';
import {CityType, SortingType, AuthStatus, ErrorMessage} from '../../common/const';
import {UserState} from '../../types/state';
import {setCity, setSort, setAuthData, requireAuthorization, requireLogout, setAuthError} from './user-actions';

const initialState: UserState = {
  city: CityType.Paris,
  sort: SortingType.Popular,
  auth: {
    data: null,
    status: AuthStatus.Unknown,
    error: ErrorMessage.NoFailure,
  },
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload.sorting;
    })
    .addCase(setAuthData, (state, action) => {
      state.auth.data = action.payload.data;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.auth.status = action.payload.authStatus;
    })
    .addCase(requireLogout, (state) => {
      state.auth.status = AuthStatus.NoAuth;
    })
    .addCase(setAuthError, (state, action) => {
      state.auth.error = action.payload.error;
    });
});

export {userReducer};
