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
    ListClassName: 'cities__places-list places__list tabs__content',
    ArticleClassName: 'cities__place-card place-card',
    ImageClassName: 'cities__image-wrapper place-card__image-wrapper',
    InfoClassName: 'place-card__info',
    ImageSize: {
      Width: 260,
      Height: 200,
    },
  },
  Near: {
    ListClassName: 'near-places__list places__list',
    ArticleClassName: 'near-places__card place-card',
    ImageClassName: 'near-places__image-wrapper place-card__image-wrapper',
    InfoClassName: 'place-card__info',
    ImageSize: {
      Width: 260,
      Height: 200,
    },
  },
  Favorites: {
    ListClassName: 'favorites__places',
    ArticleClassName: 'favorites__card place-card',
    ImageClassName: 'favorites__image-wrapper place-card__image-wrapper',
    InfoClassName: 'favorites__card-info place-card__info',
    ImageSize: {
      Width: 150,
      Height: 110,
    },
  },
} as const;

export {MAX_NUMBER_STARS, AppRoute, AuthorizationStatus, OfferSettings};
