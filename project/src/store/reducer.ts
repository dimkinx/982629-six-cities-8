import {ActionType, AuthorizationStatus, CityType, SortingType} from '../common/const';
import {State} from '../types/state';
import {Actions} from '../types/actions';

const initialState = {
  city: CityType.Paris,
  offers: [],
  sort: SortingType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
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
      return {...state, offers: action.payload};
    }
    case ActionType.RequireAuthorization: {
      return {...state, authorizationStatus: action.payload};
    }
    case ActionType.RequireLogout: {
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
