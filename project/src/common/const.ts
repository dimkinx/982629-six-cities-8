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

const OfferType = {
  Main: 'cities',
  Near: 'near-places',
  Favorites: 'favorites',
} as const;

export {MAX_NUMBER_STARS, LogoSize, AppRoute, AuthorizationStatus, OfferType};
