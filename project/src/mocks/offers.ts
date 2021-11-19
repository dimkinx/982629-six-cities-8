import {address, commerce, datatype, image, internet, lorem} from 'faker';
import {Location, Offer} from '../types/offer';
import {CityType} from '../common/const';

const createMockLocation = (): Location => ({
  latitude: Number(address.latitude()),
  longitude: Number(address.longitude()),
  zoom: datatype.number({
    min: 8,
    max: 14,
  }),
});

const createMockOffer = (): Offer => ({
  bedrooms: datatype.number(5),
  city: {
    location: createMockLocation(),
    name: address.city() as CityType,
  },
  description: commerce.productDescription(),
  goods: [lorem.words(10)],
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
  id: datatype.number(),
  images: new Array(datatype.number(10)).fill(null).map(() => image.imageUrl()),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: createMockLocation(),
  maxAdults: datatype.number(5),
  previewImage: image.imageUrl(),
  price: datatype.number(),
  rating: datatype.float({precision: 1, max: 5}),
  title: lorem.paragraph(),
  type: lorem.word(),
});

const createMockOffers = (): Offer[] => new Array(datatype.number(10)).fill(null).map(() => createMockOffer());

export {createMockOffer, createMockOffers};
