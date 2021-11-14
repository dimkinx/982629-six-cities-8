import {CityType, SortingType, ActionType, AuthStatus, ErrorMessage} from '../../common/const';
import {UserState} from '../../types/state';
import {Actions} from '../../types/actions';

const initialState = {
  city: CityType.Paris,
  sort: SortingType.Popular,
  auth: {
    data: null,
    status: AuthStatus.Unknown,
    error: ErrorMessage.NoFailure,
  },
};

const userReducer = (state: UserState = initialState, action: Actions): UserState => {
  switch (action.type) {
    case ActionType.SetCity: {
      return {...state, city: action.payload};
    }
    case ActionType.SetSorting: {
      return {...state, sort: action.payload};
    }
    case ActionType.RequireAuthorization: {
      return {...state, auth: {...state.auth, status: action.payload}};
    }
    case ActionType.RequireLogout: {
      return {...state, auth: {...state.auth, status: AuthStatus.NoAuth}};
    }
    case ActionType.SetAuthData: {
      return {...state, auth: {...state.auth, data: action.payload.data}};
    }
    case ActionType.SetAuthError: {
      return {...state, auth: {...state.auth, error: action.payload.error}};
    }
    default: {
      return state;
    }
  }
};

export {userReducer};
