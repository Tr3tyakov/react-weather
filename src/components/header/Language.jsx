import React from 'react';
import './Language.scss';
import arrow from '../images/arrow.png';
import { setOpenLanguage, setLanguage } from '../Reducers/addition/_acitons';
import { useDispatch } from 'react-redux';

function Language({ language, isOpenLanguage }) {
  const dispatch = useDispatch();

  const openSelect = () => {
    dispatch(setOpenLanguage());
  };
  const changeLanguage = (value) => {
    if (value !== language) {
      dispatch(setLanguage(value));
    }
  };

  return (
    <div className="language" onClick={openSelect}>
      <p>{language}</p>
      <img className="language__arrow" src={arrow} alt="arrow" />
      <div
        className={
          isOpenLanguage ? 'language__select language__select--active' : 'language__select'
        }>
        <p
          className={language === 'RU' ? 'language__type language__type--active' : 'language__type'}
          onClick={(e) => {
            changeLanguage(e.target.innerHTML);
          }}>
          RU
        </p>
        <p
          className={language === 'EU' ? 'language__type language__type--active' : 'language__type'}
          onClick={(e) => {
            changeLanguage(e.target.innerHTML);
          }}>
          EU
        </p>
      </div>
    </div>
  );
}

export default Language;
