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
  NotFoundScreen: '/404',
} as const;

const APIRoute = {
  Offers: '/hotels',
  FavoriteOffers: '/favorite',
  Login: '/login',
  Logout: '/logout',
} as const;

const ErrorMessage = {
  FailLoadOffers: 'Failed to load rental places',
  FailLoadFavoriteOffers: 'Failed to load saved places',
} as const;

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const enum FetchStatus {
  Success = 'SUCCESS',
  Fail = 'FAIL',
  Loading = 'LOADING',
  Unknown = 'UNKNOWN',
}

const enum OfferType {
  Main = 'cities',
  Near = 'near-places',
  Favorites = 'favorites',
}

const enum ActionType {
  SetCity = 'main/setCity',
  SetSorting = 'main/setSorting',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadOffers = 'data/loadOffers',
  SetOffersFetchStatus = 'data/setOffersFetchStatus',
  LoadFavoriteOffers = 'data/loadFavoriteOffers',
  SetFavoriteOffersFetchStatus = 'data/setFavoriteOffersFetchStatus',
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
  AuthorizationStatus,
  FetchStatus,
  OfferType,
  ActionType,
  CityType,
  SortingType
};
