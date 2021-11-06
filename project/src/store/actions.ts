import {ActionType, AuthorizationStatus, CityType, SortingType} from '../common/const';
import {SetCity, SetSorting, LoadOffers} from '../types/actions';
import {Offer} from '../types/offer';

const setCity = (city: CityType): SetCity => ({
  type: ActionType.SetCity,
  payload: city,
} as const);

const setSorting = (sorting: SortingType): SetSorting => ({
  type: ActionType.SetSorting,
  payload: sorting,
} as const);

const loadOffers = (offers: Offer[]): LoadOffers => ({
  type: ActionType.LoadOffers,
  payload: offers,
  isDataLoaded: true,
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export {setCity, setSorting, loadOffers, requireAuthorization, requireLogout};
