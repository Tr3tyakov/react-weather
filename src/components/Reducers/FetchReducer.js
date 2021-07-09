import { FETCH, SLICE_TEMP, SLICE_PRESSURE } from './addition/_case';

let initialState = {
  fetch: {},
  sliceTemp: { begin: 0, end: -1 },
  slicePressure: { begin: 0, end: -1 },
  loading: true,
  temp: [],
  pressure: [],
  data: [],
};

export function FetchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH: {
      const temp = action.payload.list.map((element) => {
        return Math.floor(element.main.temp);
      });
      const pressure = action.payload.list.map((element) => {
        return element.main.pressure;
      });

      const data = action.payload.list.map((element) => {
        let time = new Date(element.dt * 1000).toLocaleString('en-us', {
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
        });
        return time;
      });
      return { ...state, fetch: action.payload, loading: false, temp, pressure, data };
    }
    case SLICE_TEMP:
      return {
        ...state,
        sliceTemp: { ...state.sliceTemp, begin: action.payload.begin, end: action.payload.end },
      };
    case SLICE_PRESSURE:
      return {
        ...state,
        slicePressure: {
          ...state.slicePressure,
          begin: action.payload.begin,
          end: action.payload.end,
        },
      };
    default:
      return state;
  }
}
