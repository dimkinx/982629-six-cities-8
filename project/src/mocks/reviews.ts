import {datatype, image, internet, lorem} from 'faker';
import {Review} from '../types/review';

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

const createMockReviews = (): Review[] => new Array(datatype.number(10)).fill(null).map(() => createMockReview());

export {createMockReviews};
