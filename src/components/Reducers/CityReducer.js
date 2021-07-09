import { CHANGE__CITY, CHANGE__INPUT } from './addition/_case';

const initialState = {
  city: 'Sankt-Peterburg',
  inputValue: '',
};

export function CityReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE__CITY:
      return { ...state, city: action.payload };
    case CHANGE__INPUT:
      return { ...state, inputValue: action.payload };

    default:
      return state;
  }
}
