import { FETCH } from './Addition/_case';

let initialState = {
  fetch: {},
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
          weekday: 'long',
          hour: 'numeric',
          minute: 'numeric',
        });
        return time;
      });
      return { ...state, fetch: action.payload, loading: false, temp, pressure, data };
    }
    default:
      return state;
  }
}
