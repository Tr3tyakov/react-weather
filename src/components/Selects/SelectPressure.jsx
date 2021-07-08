import React from 'react';
import './Select.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setOpenPressure, setSelectedPressure } from '../Reducers/Addition/_acitons';
import arrow from '../images/arrow.png';
const type = ['All', 'Today', 'Tomorrow'];

function SelectPressure() {
  const dispatch = useDispatch();
  const { isOpenPressure, selectedPressure } = useSelector(({ DataReducer }) => {
    return {
      isOpenPressure: DataReducer.isOpenPressure,
      selectedPressure: DataReducer.selectedPressure,
    };
  });
  const openPressure = () => {
    dispatch(setOpenPressure());
  };
  const changePressure = (value) => {
    dispatch(setSelectedPressure(value));
  };
  return (
    <div className="select" onClick={openPressure}>
      <div className="select__selected">{selectedPressure}</div>
      <div className={isOpenPressure ? 'modal' : 'modal--disable'}>
        {type.map((element, index) => {
          return (
            <p className="type" key={index} onClick={(e) => changePressure(e.target.innerHTML)}>
              {element}
            </p>
          );
        })}
      </div>
      <div>
        <img className={isOpenPressure ? 'arrow--rotate' : 'arrow'} src={arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default SelectPressure;
