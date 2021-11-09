import {Offer, RawOffer} from '../types/offer';
import {Review, RawReview} from '../types/review';
import {AuthData, RawAuthData} from '../types/auth-data';

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

const adaptReviewToClient = (rawReview: RawReview): Review => ({
  comment: rawReview.comment,
  date: rawReview.date,
  id: rawReview.id,
  rating: rawReview.rating,
  user: {
    avatarUrl: rawReview.user.avatar_url,
    id: rawReview.user.id,
    isPro: rawReview.user.is_pro,
    name: rawReview.user.name,
  },
});

const adaptAuthDataToClient = (rawAuthData: RawAuthData): AuthData => ({
  avatarUrl: rawAuthData.avatar_url,
  email: rawAuthData.email,
  id: rawAuthData.id,
  isPro: rawAuthData.is_pro,
  name: rawAuthData.name,
  token: rawAuthData.token,
});

export {adaptOfferToClient, adaptReviewToClient, adaptAuthDataToClient};
