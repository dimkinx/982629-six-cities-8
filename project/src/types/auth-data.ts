type AuthData = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
} | null;

type RawAuthData = {
  'avatar_url': string;
  'email': string;
  'id': number;
  'is_pro': boolean;
  'name': string;
  'token': string;
};

type UserAuthData = {
  login: string;
  password: string;
};

export type {AuthData, RawAuthData, UserAuthData};
