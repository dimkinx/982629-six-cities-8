import {CityType} from '../common/const';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type OfferIdParamValue = {
  id: string;
}

type Offer = {
  bedrooms: number;
  city: {
    location: Location;
    name: CityType;
  }
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

type RawOffer = {
  'bedrooms': number;
  'city': {
    'location': Location;
    'name': CityType;
  }
  'description': string;
  'goods': string[];
  'host': {
    'avatar_url': string;
    'id': number;
    'is_pro': boolean;
    'name': string;
  }
  'id': number;
  'images': string[];
  'is_favorite': boolean;
  'is_premium': boolean;
  'location': Location;
  'max_adults': number;
  'preview_image': string;
  'price': number;
  'rating': number;
  'title': string;
  'type': string;
}

export type {Location, OfferIdParamValue, Offer, RawOffer};
