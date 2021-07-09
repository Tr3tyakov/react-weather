import React from 'react';
import temperature from './images/temperature.png';
import humidity from './images/humidity.png';
import speed from './images/wind.png';
import './Weather.scss';
function Weather({ fetch }) {
  return (
    <>
      <h2 className="five-days">5 Days Forecast</h2>
      <div className="forecast">
        {fetch.list.map((element, index) => {
          return (
            <div className="weather-block" key={index}>
              <div className="weather-block__data">{element.dt_txt}</div>
              <div className="weather-block__icon">
                <img
                  src={`http://openweathermap.org/img/w/${element.weather[0].icon}.png`}
                  alt="icon"
                />
              </div>
              <div className="information">
                <div className="weather-block__info">
                  <div className="weather-block__digit">{element.main.temp}</div>
                  <div>
                    <img src={temperature} alt="temp" />
                  </div>
                </div>
                <div className="weather-block__info">
                  <div className="weather-block__digit">{element.main.humidity}</div>
                  <div>
                    <img src={humidity} alt="humidity" />
                  </div>
                </div>
                <div className="weather-block__info">
                  <div className="weather-block__digit">{element.wind.speed}</div>
                  <div>
                    <img src={speed} alt="speed" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Weather;
