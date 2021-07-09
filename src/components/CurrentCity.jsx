import React from 'react';
import './CurrentCity.scss';

import humidity from './images/humidity.png';
import pressureImg from './images/preassure.png';
import location from './images/location.png';

import time from './images/time.png';
import calendar from './images/calendar.png';
import TimeDate from './timeCity/TimeDate';
import TimeZone from './timeCity/TimeZone';

const CurrentCity = React.memo(function CurrentCity({ fetch }) {
  return (
    <div className="weather">
      <div className="weather-data">
        <div className="temperature-box">
          <div className="temperature">
            <span>{fetch.list[0].main.temp}</span>
            <span>&nbsp;℃</span>
            <div className="temperature__img">
              <img
                src={
                  fetch.list &&
                  `http://openweathermap.org/img/wn/${fetch.list[0].weather[0].icon}.png`
                }
                alt="weather"
              />
            </div>
          </div>
          <div className="additional">
            <div className="additional__pressure">Pressure: {fetch.list[0].main.pressure} hpa</div>
            <div className="additional__humidity">Humidity: {fetch.list[0].main.humidity} %</div>
          </div>
        </div>
      </div>
      <div className="weather__about">
        <div className="humidity">
          <div className="humidity__img">
            <img className="img" src={humidity} alt="humiditiy" />
          </div>
          <div>
            <div>
              <p className="pressure__title">humidity</p>
              <strong className="humidity__number">{fetch.list[0].main.humidity}%</strong>
            </div>
          </div>
        </div>
        <div className="pressure">
          <div className="pressure__img">
            <img className="img" src={pressureImg} alt="pressuare" />
          </div>
          <div className="pressure__grnd-level">
            <div>
              <p className="pressure__title">Preassure QNH</p>
              <strong>{fetch.list[0].main.grnd_level}&nbsp;</strong>
              hpa
            </div>
          </div>
          <div className="pressure__sea-level">
            <div>
              <p className="pressure__title">Preassure QFE</p>
              <strong>{fetch.list[0].main.sea_level}&nbsp;</strong>
              hpa
            </div>
          </div>
          <div className="pressure__pressure">
            <div>
              <p className="pressure__title">Preassure Sensor</p>
              <strong>{fetch.list[0].main.pressure}&nbsp;</strong>
              hpa
            </div>
          </div>
        </div>
      </div>

      <div className="weather-city">
        <h6 className="weather-city__title">Country {`<${fetch.city.country}>`}</h6>
        <h1 className="weather-city__country">{fetch.city.name}</h1>
        <div className="text">
          <div className="text__coords">
            <div>
              <img src={location} alt="navigation" />
            </div>
            <div>
              <p>{fetch.city.coord.lat}N</p>
            </div>
            <div>
              <p>{fetch.city.coord.lon}E</p>
            </div>
          </div>
          <div className="text__data">
            <div>
              <img src={calendar} alt="calendar" />
            </div>
            <div>
              <TimeDate fetch={fetch} />
            </div>
          </div>
          <div className="text__time">
            <div>
              <img src={time} alt="time" />
            </div>
            <div>
              <TimeZone fetch={fetch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CurrentCity;
