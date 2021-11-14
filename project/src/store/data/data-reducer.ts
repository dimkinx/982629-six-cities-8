import {ActionType, RequestStatus} from '../../common/const';
import {DataState} from '../../types/state';
import {Actions} from '../../types/actions';

const initialState = {
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
};

const dataReducer = (state: DataState = initialState, action: Actions): DataState => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

export {dataReducer};
