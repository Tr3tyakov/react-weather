import React from 'react';
import './Select.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  setOpenPressure,
  setSelectedPressure,
  setSlicePressure,
} from '../Reducers/addition/_acitons';
import arrow from '../images/arrow.png';

const SelectPressure = React.memo(function SelectPressure({ type }) {
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
    if (value === selectedPressure) {
      return;
    }
    dispatch(setSelectedPressure(value));
    switch (value) {
      case 'All':
        return dispatch(setSlicePressure(0, -1));
      case 'Today':
        return dispatch(setSlicePressure(0, 4));
      case 'Tomorrow':
        return dispatch(setSlicePressure(4, 11));
    }
  };
  return (
    <div className="select" onClick={openPressure}>
      <div className="select__selected">{selectedPressure}</div>
      <div className={isOpenPressure ? 'modal' : 'modal--disable'}>
        {type.map((element, index) => {
          return (
            <p
              className={selectedPressure === element ? 'type type--active' : 'type'}
              key={index}
              onClick={(e) => changePressure(e.target.innerHTML)}>
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
});

export default SelectPressure;
