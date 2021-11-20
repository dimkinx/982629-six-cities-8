import {datatype, image, internet, lorem} from 'faker';
import {RawReview, Review, UserReview} from '../types/review';

const createMockUserReview = (): UserReview => ({
  rating: datatype.number(),
  comment: lorem.paragraphs(),
});

const createMockReview = (): Review => ({
  comment: lorem.paragraphs(),
  date: datatype.datetime().toISOString(),
  id: datatype.number(),
  rating: datatype.float({precision: 1, max: 5}),
  user: {
    avatarUrl: image.imageUrl(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
});

const createMockRawReview = (): RawReview => ({
  'comment': lorem.paragraphs(),
  'date': datatype.datetime().toISOString(),
  'id': datatype.number(),
  'rating': datatype.float({precision: 1, max: 5}),
  'user': {
    'avatar_url': internet.avatar(),
    'id': datatype.number(),
    'is_pro': datatype.boolean(),
    'name': internet.userName(),
  },
});

const createMockReviews = (): Review[] => new Array(datatype.number(10)).fill(null).map(() => createMockReview());

const createMockRawReviews = (): RawReview[] => new Array(datatype.number(10)).fill(null).map(() => createMockRawReview());

export {createMockUserReview, createMockReviews, createMockRawReviews};
