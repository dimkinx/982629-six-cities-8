type LocationType = {
  latitude: number,
  longitude: number,
  zoom: number,
};

type OfferType = {
  bedrooms: number;
  city: {
    location: LocationType;
    name: string;
  };
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationType;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

type OfferSittingsType = {
  ListClassName: string,
  ArticleClassName: string,
  ImageClassName: string,
  InfoClassName: string,
  ImageSize: {
    Width: number;
    Height: number;
  },
};

export type {OfferType, OfferSittingsType};
