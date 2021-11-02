import {ActionType, CityType} from '../common/const';
import {Offer} from './offer';

type SetCity = {
  type: ActionType.SetCity,
  payload: CityType,
};

type SetOffers = {
  type: ActionType.SetOffers,
  payload: Offer[],
};

type Actions = SetCity | SetOffers;

export type {SetCity, SetOffers, Actions};
