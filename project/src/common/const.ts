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

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
} as const;

const enum OfferType {
  Main = 'cities',
  Near = 'near-places',
  Favorites = 'favorites',
}

const enum ActionType {
  SetCity = 'main/setCity',
  SetOffers = 'main/setOffers',
  SetSorting = 'main/setSorting',
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

export {MAX_NUMBER_STARS, LogoSize, AppRoute, AuthorizationStatus, OfferType, ActionType, CityType, SortingType};
