import {ActionType, AuthStatus, CityType, FetchStatus, SortingType} from '../common/const';
import {State} from '../types/state';
import {Actions} from '../types/actions';

const initialState = {
  city: CityType.Paris,
  sort: SortingType.Popular,
  offers: {
    data: [],
    fetchStatus: FetchStatus.Unknown,
  },
  favoriteOffers: {
    data: [],
    fetchStatus: FetchStatus.Unknown,
  },
  auth: {
    data: null,
    error: '',
    status: AuthStatus.Unknown,
  },
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity: {
      return {...state, city: action.payload};
    }
    case ActionType.SetSorting: {
      return {...state, sort: action.payload};
    }
    case ActionType.LoadOffers: {
      return {...state, offers: {...state.offers, data: action.payload.data}};
    }
    case ActionType.SetOffersFetchStatus: {
      return {...state, offers: {...state.offers, fetchStatus: action.payload.fetchStatus}};
    }
    case ActionType.LoadFavoriteOffers: {
      return {...state, favoriteOffers: {...state.favoriteOffers, data: action.payload.data}};
    }
    case ActionType.SetFavoriteOffersFetchStatus: {
      return {...state, favoriteOffers: {...state.favoriteOffers, fetchStatus: action.payload.fetchStatus}};
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

export {reducer};
