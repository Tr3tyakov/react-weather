import {
  CHANGE__CHART,
  CHANGE__OPEN__TEMP,
  CHANGE__OPEN__PRESSURE,
  CHANGE__SELECTED__TEMP,
  CHANGE__SELECTED__PRESSURE,
} from './Addition/_case';

const initialState = {
  chart: [],
  selectedTemp: 'All',
  isOpenTemp: false,

  selectedPressure: 'All',
  isOpenPressure: false,
};

export function DataReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE__CHART:
      return { ...state, chart: action.payload };

    case CHANGE__OPEN__TEMP:
      return { ...state, isOpenTemp: !state.isOpenTemp };
    case CHANGE__SELECTED__TEMP:
      return { ...state, selectedTemp: action.payload };

    case CHANGE__OPEN__PRESSURE:
      return { ...state, isOpenPressure: !state.isOpenPressure };
    case CHANGE__SELECTED__PRESSURE:
      return { ...state, selectedPressure: action.payload };

    default:
      return state;
  }
}
