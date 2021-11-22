import {datatype, internet} from 'faker';
import {AuthData, RawAuthData, UserAuthData} from '../types/auth-data';

const createMockUserAuthData = (): UserAuthData => ({
  email: internet.email(),
  password: internet.password(),
});

const createMockAuthData = (): AuthData => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: internet.userName(),
  token: datatype.uuid(),
});

const createMockRawAuthData = (): RawAuthData => ({
  'avatar_url': internet.avatar(),
  'email': internet.email(),
  'id': datatype.number(),
  'is_pro': datatype.boolean(),
  'name': internet.userName(),
  'token': datatype.uuid(),
});

export {createMockUserAuthData, createMockAuthData, createMockRawAuthData};
