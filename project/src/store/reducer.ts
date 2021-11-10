import {ActionType, AuthStatus, CityType, ErrorMessage, RequestStatus, SortingType} from '../common/const';
import {State} from '../types/state';
import {Actions} from '../types/actions';

const initialState = {
  city: CityType.Paris,
  sort: SortingType.Popular,
  offer: {
    data: null,
    requestStatus: RequestStatus.Unknown,
  },
  offers: {
    data: [],
    requestStatus: RequestStatus.Unknown,
  },
  nearbyOffers: {
    data: [],
    requestStatus: RequestStatus.Unknown,
  },
  favoriteOffers: {
    data: [],
    requestStatus: RequestStatus.Unknown,
  },
  reviews: {
    data: [],
    requestStatus: RequestStatus.Unknown,
  },
  review: {
    requestStatus: RequestStatus.Unknown,
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
    case ActionType.SetOfferRequestStatus: {
      return {...state, offer: {...state.offer, requestStatus: action.payload.requestStatus}};
    }
    case ActionType.LoadOffers: {
      return {...state, offers: {...state.offers, data: action.payload.data}};
    }
    case ActionType.SetOffersRequestStatus: {
      return {...state, offers: {...state.offers, requestStatus: action.payload.requestStatus}};
    }
    case ActionType.LoadNearbyOffers: {
      return {...state, nearbyOffers: {...state.nearbyOffers, data: action.payload.data}};
    }
    case ActionType.SetNearbyOffersRequestStatus: {
      return {...state, nearbyOffers: {...state.nearbyOffers, requestStatus: action.payload.requestStatus}};
    }
    case ActionType.LoadFavoriteOffers: {
      return {...state, favoriteOffers: {...state.favoriteOffers, data: action.payload.data}};
    }
    case ActionType.SetFavoriteOffersRequestStatus: {
      return {...state, favoriteOffers: {...state.favoriteOffers, requestStatus: action.payload.requestStatus}};
    }
    case ActionType.LoadReviews: {
      return {...state, reviews: {...state.reviews, data: action.payload.data}};
    }
    case ActionType.SetReviewsRequestStatus: {
      return {...state, reviews: {...state.reviews, requestStatus: action.payload.requestStatus}};
    }
    case ActionType.SetReviewRequestStatus: {
      return {...state, review: {...state.review, requestStatus: action.payload.requestStatus}};
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
