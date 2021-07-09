import React from 'react';
import './Input.scss';
import loupe from '../images/loupe.png';
import { useDispatch } from 'react-redux';
import { setCity, setInput } from '../Reducers/addition/_acitons';

function Input({ inputValue }) {
  const dispatch = useDispatch();
  const changeCity = (e) => {
    e.preventDefault();
    dispatch(setCity(inputValue));
  };

  return (
    <>
      <div className="navigation">
        <div className="input">
          <form onSubmit={changeCity}>
            <input
              className="input__choose-city"
              placeholder="Choose place"
              type="text"
              value={inputValue}
              onChange={(e) => dispatch(setInput(e.target.value))}></input>
          </form>

          <img className="input__loupe" src={loupe} alt="loupe" />
        </div>
      </div>
    </>
  );
}

export default Input;
