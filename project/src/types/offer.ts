type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
};

type Offer = {
  bedrooms: number;
  city: {
    location: Location;
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
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

type OfferSittings = {
  ListClassName: string,
  ArticleClassName: string,
  ImageClassName: string,
  InfoClassName: string,
  ImageSize: {
    Width: number;
    Height: number;
  },
};

export type {Offer, OfferSittings};
