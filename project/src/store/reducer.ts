import {ActionType, AuthStatus, CityType, ErrorMessage, FetchStatus, SortingType} from '../common/const';
import {State} from '../types/state';
import {Actions} from '../types/actions';

const initialState = {
  city: CityType.Paris,
  sort: SortingType.Popular,
  offer: {
    data: null,
    fetchStatus: FetchStatus.Unknown,
  },
  offers: {
    data: [],
    fetchStatus: FetchStatus.Unknown,
  },
  nearbyOffers: {
    data: [],
    fetchStatus: FetchStatus.Unknown,
  },
  favoriteOffers: {
    data: [],
    fetchStatus: FetchStatus.Unknown,
  },
  reviews: {
    data: [],
    fetchStatus: FetchStatus.Unknown,
  },
  auth: {
    data: null,
    error: ErrorMessage.NoFailure,
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
    case ActionType.LoadOffer: {
      return {...state, offer: {...state.offer, data: action.payload.data}};
    }
    case ActionType.SetOfferFetchStatus: {
      return {...state, offer: {...state.offer, fetchStatus: action.payload.fetchStatus}};
    }
    case ActionType.LoadOffers: {
      return {...state, offers: {...state.offers, data: action.payload.data}};
    }
    case ActionType.SetOffersFetchStatus: {
      return {...state, offers: {...state.offers, fetchStatus: action.payload.fetchStatus}};
    }
    case ActionType.LoadNearbyOffers: {
      return {...state, nearbyOffers: {...state.nearbyOffers, data: action.payload.data}};
    }
    case ActionType.SetNearbyOffersFetchStatus: {
      return {...state, nearbyOffers: {...state.nearbyOffers, fetchStatus: action.payload.fetchStatus}};
    }
    case ActionType.LoadFavoriteOffers: {
      return {...state, favoriteOffers: {...state.favoriteOffers, data: action.payload.data}};
    }
    case ActionType.SetFavoriteOffersFetchStatus: {
      return {...state, favoriteOffers: {...state.favoriteOffers, fetchStatus: action.payload.fetchStatus}};
    }
    case ActionType.LoadReviews: {
      return {...state, reviews: {...state.reviews, data: action.payload.data}};
    }
    case ActionType.SetReviewsFetchStatus: {
      return {...state, reviews: {...state.reviews, fetchStatus: action.payload.fetchStatus}};
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
