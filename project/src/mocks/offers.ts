import {OfferType} from '../types/offer-types';

const offers: OfferType[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. ' +
      'The building is green and from 18th century. \n'+
      'An independent House, strategically located between Rembrand Square and National Opera, ' +
      'but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 9,
      isPro: true,
      name: 'Angelina',
    },
    id: 0,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 4.5,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370217,
        longitude: 4.895169,
        zoom: 10,
      },
      name: 'Dusseldorf',
    },
    description: 'This place is ideal for creativity, work, romantic family holidays for two. ' +
      'The house has everything you need, including two very important cats. \n' +
      'Near the house there is a beautiful Orthodox church with regular services, ' +
      'as well as a forest with routes for walking and sports.',
    goods: ['Wi-Fi', 'Cable TV', 'Kitchen', 'Washing machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 9,
      isPro: false,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.45514938496378,
      longitude: 4.773877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 100,
    rating: 4.4,
    title: 'Wood and stone place',
    type: 'private room',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.470216,
        longitude: 4.995168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Guests will enjoy private bedroom/bathroom as well as living areas. ' +
      'Incredibly comfortable bed with memorary foam topper, pottery barn sheets and duvet.\n' +
      'Enjoy fresh breakfast each morning as well as delicious snacks throughout your stay. \n' +
      'Wonderful coffee shops and restaurants close by. All kitchen items needed for cooking provided by host. ' +
      'Bathrooms stocked with luxury shampoos, conditioners, bath products and more.',
    goods: ['Towels', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 9,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.36514938496378,
      longitude: 4.683877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 3.1,
    title: 'Canal View Prinsengracht',
    type: 'private room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.380216,
        longitude: 4.896168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Have a glass of wine while enjoying Netflix on the comfortable sofa after exploring local culture.\n' +
      'Pull the back the curtains after a restful night’s sleep and let light flood into this studio. ' +
      'This central apartment makes excellent use of the space with a calming neutral palette and sleek finished ' +
      'floors alongside thoughtful details.',
    goods: ['Kitchen', 'Heating', 'Cable TV', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 9,
      isPro: false,
      name: 'Angelina',
    },
    id: 3,
    images: ['img/apartment-03.jpg', 'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35524938496378,
      longitude: 4.673887537499948,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-03.jpg',
    price: 160,
    rating: 1.9,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
  },
];

export default offers;
