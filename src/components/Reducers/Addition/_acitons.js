import axios from 'axios';
import {
  FETCH,
  LOADING,
  CHANGE__CITY,
  CHANGE__INPUT,
  CHANGE__CHART,
  CHANGE__OPEN__TEMP,
  CHANGE__OPEN__PRESSURE,
  CHANGE__SELECTED__PRESSURE,
  CHANGE__SELECTED__TEMP,
  SLICE_TEMP,
  SLICE_PRESSURE,
} from './_case';

//FETCH
export const setFetch = (value) => ({ type: FETCH, payload: value });
export const setLoading = (bool) => ({ type: LOADING, payload: bool });
export const setSliceTemp = (begin, end) => ({ type: SLICE_TEMP, payload: { begin, end } });
export const setSlicePressure = (begin, end) => ({ type: SLICE_PRESSURE, payload: { begin, end } });

//DATA
export const setData = (chart) => ({
  type: CHANGE__CHART,
  payload: chart,
});

//INPUT
export const setCity = (bool) => ({ type: CHANGE__CITY, payload: bool });
export const setInput = (bool) => ({ type: CHANGE__INPUT, payload: bool });

export const setOpenTemp = (bool) => ({ type: CHANGE__OPEN__TEMP, payload: bool });
export const setOpenPressure = (bool) => ({ type: CHANGE__OPEN__PRESSURE, payload: bool });

export const setSelectedTemp = (bool) => ({ type: CHANGE__SELECTED__TEMP, payload: bool });

export const setSelectedPressure = (bool) => ({ type: CHANGE__SELECTED__PRESSURE, payload: bool });

//ASYNC
export const fetchOffer = (city) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=60cebb14e59166273d73047e1a60e4ac`,
    )
    .then(({ data }) => {
      dispatch(setFetch(data));
    });
};
