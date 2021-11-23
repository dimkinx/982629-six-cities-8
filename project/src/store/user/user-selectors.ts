import {State} from '../../types/state';
import {AuthStatus, CityType, SortingType} from '../../common/const';

const getCity = (state: State): CityType => state.user.city;

const getSorting = (state: State): SortingType => state.user.sort;

const getAuthStatus = (state: State): AuthStatus => state.user.auth.status;

const getIsAuthorized = (state: State): boolean => state.user.auth.status === AuthStatus.Auth;

const getUserEmail = (state: State): string | undefined => state.user.auth.data?.email;

export {
  getCity,
  getSorting,
  getAuthStatus,
  getIsAuthorized,
  getUserEmail
};
