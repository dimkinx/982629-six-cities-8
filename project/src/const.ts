const MAX_NUMBER_STARS = 5;

const AppRoute = {
  MainScreen: '/',
  LoginScreen: '/login',
  FavoritesScreen: '/favorites',
  OfferScreen: '/offer/:id',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
} as const;

const OfferSettings = {
  Main: {
    Modifier: 'cities',
    ImageSize: {
      Width: 260,
      Height: 200,
    },
  },
  Near: {
    Modifier: 'near-places',
    ImageSize: {
      Width: 260,
      Height: 200,
    },
  },
  Favorites: {
    Modifier: 'favorites',
    ImageSize: {
      Width: 150,
      Height: 110,
    },
  },
} as const;

export {MAX_NUMBER_STARS, AppRoute, AuthorizationStatus, OfferSettings};
