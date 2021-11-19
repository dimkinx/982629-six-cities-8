import {datatype, internet} from 'faker';
import {AuthData} from '../types/auth-data';

const createMockAuthData = (): AuthData => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: internet.userName(),
  token: datatype.uuid(),
});

export {createMockAuthData};
