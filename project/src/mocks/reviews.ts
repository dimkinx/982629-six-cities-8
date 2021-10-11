import {ReviewType} from '../types/review-types';

const reviews: ReviewType[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-05-08T14:13:56.569Z',
    id: 0,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'Apartment maintenance and staff is very courteous and kind and everything is completed in a timely manner.',
    date: '2020-01-03T16:14:50.569Z',
    id: 1,
    rating: 3.5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Sam',
    },
  },
  {
    comment: 'Apartment in great shape.',
    date: '2019-05-08T14:13:56.569Z',
    id: 2,
    rating: 4.9,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Dude',
    },
  },
];

export default reviews;
