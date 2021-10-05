export const AppRoute = {
  MainScreen: '/',
  LoginScreen: '/login',
  FavoritesScreen: '/favorites',
  OfferScreen: '/offer/:id',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
} as const;
