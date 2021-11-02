import {ActionType, CityType} from '../common/const';
import {Offer} from '../types/offer';
import {SetCity, SetOffers} from '../types/actions';

const setCity = (city: CityType): SetCity => ({
  type: ActionType.SetCity,
  payload: city,
});

const setOffers = (offers: Offer[]): SetOffers => ({
  type: ActionType.SetOffers,
  payload: offers,
});

export {setCity, setOffers};
