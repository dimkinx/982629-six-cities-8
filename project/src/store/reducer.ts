import {ActionType, CityType} from '../common/const';
import {State} from '../types/state';
import {Actions} from '../types/actions';

const initialState = {
  city: CityType.Paris,
  offers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity:
      return {...state, city: action.payload};
    case ActionType.SetOffers:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export {reducer};
