import {ActionType, CityType, SortingType} from '../common/const';
import {Offer} from './offer';

type SetCity = {
  type: ActionType.SetCity,
  payload: CityType,
};

type SetOffers = {
  type: ActionType.SetOffers,
  payload: Offer[],
};

type SetSorting = {
  type: ActionType.SetSorting,
  payload: SortingType,
};

type Actions =
  | SetCity
  | SetOffers
  | SetSorting;

export type {SetCity, SetOffers, SetSorting, Actions};
