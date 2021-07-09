import React from 'react';
import Input from './components/header/Input';
import './components/media/media.scss';
import './App.scss';

import CurrentCity from './components/CurrentCity';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOffer } from './components/Reducers/addition/_acitons';
import Chart from './components/Chart';
import direction from './components/images/direction.png';
import wind from './components/images/wind.png';
import Weather from './components/Weather';
import Language from './components/header/Language';

function App() {
  const dispatch = useDispatch();
  const {
    city,
    loading,
    temp,
    data,
    pressure,
    fetch,
    inputValue,
    chart,
    sliceTemp,
    slicePressure,
    language,
    isOpenLanguage,
  } = useSelector(({ HeaderReducer, FetchReducer, DataReducer }) => {
    return {
      fetch: FetchReducer.fetch,
      loading: FetchReducer.loading,
      data: FetchReducer.data,
      sliceTemp: FetchReducer.sliceTemp,
      slicePressure: FetchReducer.slicePressure,
      temp: FetchReducer.temp,
      pressure: FetchReducer.pressure,
      chart: DataReducer.chart,
      city: HeaderReducer.city,
      language: HeaderReducer.language,
      isOpenLanguage: HeaderReducer.isOpenLanguage,
      inputValue: HeaderReducer.inputValue,
    };
  });
  React.useEffect(() => {
    dispatch(fetchOffer(city));
  }, [city]);

  if (loading) {
    return (
      <>
        <div className="background"></div>
        <div className="loading">
          <div className="loadingio-spinner-eclipse-j0chh2mhmbg">
            <div className="ldio-biifrrkzfbi">
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="background"></div>
      <div className="container">
        <div className="header">
          <Language language={language} isOpenLanguage={isOpenLanguage} />
          <Input inputValue={inputValue} />
        </div>
        <div className="body">
          <CurrentCity fetch={fetch} />
          <Chart
            temp={temp}
            data={data}
            pressure={pressure}
            chart={chart}
            city={city}
            sliceTemp={sliceTemp}
            slicePressure={slicePressure}
          />
        </div>
        <div className="blocks">
          <div className="block-info">
            <div>
              <img src={wind} alt="wind" />
            </div>
            <div className="wind">
              <div className="speed">
                <p className="speed__title">speed</p>
                <strong>{fetch.list[0].wind.speed} kt</strong>
              </div>
              <div className="direction">
                <div className="">
                  <p className="direction__title">direction</p>
                  <div className="direction__wrapper">
                    <img
                      style={{
                        transform: `rotate(${fetch.list[0].wind.deg}deg)`,
                        margin: '0 5px 0 0',
                      }}
                      src={direction}
                      alt="direction"
                    />
                    <strong>{fetch.list[0].wind.deg}°</strong>
                  </div>
                </div>
              </div>
              <div className="gust">
                <div>
                  <p className="gust__title">gust</p>
                  <strong>{fetch.list[0].wind.gust} kt</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="block-info">
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${fetch.list[0].weather[0].icon}.png`}
                alt=""
              />
            </div>
            <div className="clouds">
              <p className="clouds__title">{fetch.list[0].weather[0].main}</p>
              <strong>{fetch.list[0].weather[0].description}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <section>
        <div className="container">
          <Weather fetch={fetch} />
        </div>
      </section>
    </>
  );
}

export default App;
