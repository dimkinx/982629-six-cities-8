const MAX_NUMBER_STARS = 5;

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

const AppRoute = {
  MainScreen: '/',
  LoginScreen: '/login',
  FavoritesScreen: '/favorites',
  OfferScreen: '/offer/:id',
  Offer: '/offer/',
} as const;

const APIRoute = {
  GetOffer: (id: string) => `/hotels/${id}`,
  GetOffers: () => '/hotels',
  GetNearbyOffers: (id: string) => `/hotels/${id}/nearby`,
  GetFavoriteOffers: () => '/favorite',
  GetReviews: (id: string) => `/comments/${id}`,
  PostReview: (id: string) => `/comments/${id}`,
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
  NotFound = 'NOT_FOUND',
  Fail = 'FAIL',
}

const enum OfferType {
  Main = 'cities',
  Near = 'near-places',
  Favorites = 'favorites',
}

const enum ActionType {
  SetCity = 'main/setCity',
  SetSorting = 'main/setSorting',
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
  SendReview = 'data/sendReview',
  SetReviewRequestStatus = 'data/setReviewRequestStatus',
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

export {
  MAX_NUMBER_STARS,
  LogoSize,
  AppRoute,
  APIRoute,
  ErrorMessage,
  AuthStatus,
  RequestStatus,
  OfferType,
  ActionType,
  CityType,
  SortingType
};
