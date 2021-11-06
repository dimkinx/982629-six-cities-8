import {Offer, RawOffer} from '../types/offer';

const adaptOfferToClient = (rawOffer: RawOffer): Offer => ({
  bedrooms: rawOffer.bedrooms,
  city: rawOffer.city,
  description: rawOffer.description,
  goods: rawOffer.goods,
  host: {
    avatarUrl: rawOffer.host.avatar_url,
    id: rawOffer.host.id,
    isPro: rawOffer.host.is_pro,
    name: rawOffer.host.name,
  },
  id: rawOffer.id,
  images: rawOffer.images,
  isFavorite: rawOffer.is_favorite,
  isPremium: rawOffer.is_premium,
  location: rawOffer.location,
  maxAdults: rawOffer.max_adults,
  previewImage: rawOffer.preview_image,
  price: rawOffer.price,
  rating: rawOffer.rating,
  title: rawOffer.title,
  type: rawOffer.type,
});

export {adaptOfferToClient};
