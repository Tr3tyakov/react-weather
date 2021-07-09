import { CHANGE__CITY, CHANGE__INPUT, CHANGE__LANGUAGE, OPEN__LANGUAGE } from './addition/_case';

const initialState = {
  city: 'Sankt-Peterburg',
  isOpenLanguage: false,
  language: 'EU',
  inputValue: '',
};

export function HeaderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE__CITY:
      return { ...state, city: action.payload };
    case CHANGE__INPUT:
      return { ...state, inputValue: action.payload };
    case CHANGE__LANGUAGE:
      return { ...state, language: action.payload };
    case OPEN__LANGUAGE:
      return { ...state, isOpenLanguage: !state.isOpenLanguage };
    default:
      return state;
  }
}
