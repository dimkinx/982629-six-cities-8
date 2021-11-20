import {OfferIdParamValue} from '../types/offer';

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

const LogoSize = {
  Header: {
    Width: 81,
    Height: 41,
  },
  Footer: {
    Width: 64,
    Height: 33,
  },
} as const;

const LoaderParam = {
  Type: 'Watch',
  Color: '#4481c3',
  Size: {
    Width: 100,
    Height: 100,
  },
} as const;

const ToastParam = {
  Theme: 'colored',
  Position: 'top-center',
} as const;

const PropertyParam = {
  GalleryImgCount: 6,
  ReviewsMaxCount: 10,
  MapZoom: 13,
} as const;

const MapIconParam = {
  DefaultImgUrl: 'img/pin.svg',
  ActiveImgUrl: 'img/pin-active.svg',
  Size: {
    Width: 27,
    Height: 39,
  },
  AnchorCoordinate: {
    X: 27 / 2,
    Y: 39,
  },
} as const;

const OfferCardImgSize = {
  Favorites: {
    Width: 150,
    Height: 110,
  },
  Nearby: {
    Width: 260,
    Height: 200,
  },
} as const;

const BookmarkIconSize = {
  PlaceCard: {
    Width: 18,
    Height: 19,
  },
  Property: {
    Width: 31,
    Height: 33,
  },
} as const;

const CommentLengthLimit = {
  Min: 50,
  Max: 300,
} as const;

const AppRoute = {
  MainScreen: '/',
  LoginScreen: '/login',
  FavoritesScreen: '/favorites',
  OfferScreen: '/offer/:id',
  Offer: '/offer/',
} as const;

const APIRoute = {
  GetOffer: (id: OfferIdParamValue) => `/hotels/${id}`,
  GetOffers: () => '/hotels',
  GetNearbyOffers: (id: OfferIdParamValue) => `/hotels/${id}/nearby`,
  GetFavoriteOffers: () => '/favorite',
  PostFavoritesStatus: (id: OfferIdParamValue, status: FavoritesStatusType) => `/favorite/${id}/${status}`,
  GetReviews: (id: OfferIdParamValue) => `/comments/${id}`,
  PostReview: (id: OfferIdParamValue) => `/comments/${id}`,
  Login: () => '/login',
  Logout: () => '/logout',
} as const;

const enum ErrorMessage {
  NoFailure = '',
  FailToLoadOffer = 'Failed to load rental place',
  FailToLoadOffers = 'Failed to load rental places',
  FailToLoadNearbyOffers = 'Failed to load nearby places',
  FailToLoadFavoriteOffers = 'Failed to load saved places',
  FailToLoadReviews = 'Failed to load reviews',
  FailToSendReview = 'Failed to send review',
}

const enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const enum RequestStatus {
  Unknown = 'UNKNOWN',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Updated = 'UPDATED',
  NotFound = 'NOT_FOUND',
  Fail = 'FAIL',
}

const enum OfferType {
  Main = 'cities',
  Near = 'near-places',
  Favorites = 'favorites',
}

const enum ActionType {
  LoadOffer = 'data/loadOffer',
  SetOfferRequestStatus = 'data/setOfferRequestStatus',
  LoadOffers = 'data/loadOffers',
  SetOffersRequestStatus = 'data/setOffersRequestStatus',
  LoadNearbyOffers = 'data/loadNearOffers',
  SetNearbyOffersRequestStatus = 'data/setNearOffersRequestStatus',
  LoadFavoriteOffers = 'data/loadFavoriteOffers',
  SetFavoriteOffersRequestStatus = 'data/setFavoriteOffersRequestStatus',
  LoadReviews = 'data/loadReviews',
  SetReviewsRequestStatus = 'data/setReviewsRequestStatus',
  SetReviewRequestStatus = 'data/setReviewRequestStatus',
  UpdateAllOffers = 'data/updateAllOffers',
  SetCity = 'user/setCity',
  SetSorting = 'user/setSorting',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetAuthData = 'user/setAuthData',
  SetAuthError = 'user/setAuthError',
}

enum CityType {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

enum SortingType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  Rating = 'Top rated first',
}

enum RatingType {
  Terribly = 'terribly',
  Badly = 'badly',
  NotBad = 'not bad',
  Good = 'good',
  Perfect = 'perfect',
}

enum BookmarkButtonType {
  PlaceCard = 'place-card',
  Property = 'property',
}

enum FavoritesStatusType {
  True = 1,
  False = 0,
}

export {
  AUTH_TOKEN_KEY_NAME,
  LogoSize,
  LoaderParam,
  ToastParam,
  PropertyParam,
  MapIconParam,
  OfferCardImgSize,
  BookmarkIconSize,
  CommentLengthLimit,
  AppRoute,
  APIRoute,
  ErrorMessage,
  AuthStatus,
  RequestStatus,
  OfferType,
  ActionType,
  CityType,
  SortingType,
  RatingType,
  BookmarkButtonType,
  FavoritesStatusType
};
