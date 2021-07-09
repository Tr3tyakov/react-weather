import React from 'react';
import './Select.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenTemp, setSelectedTemp, setSliceTemp } from '../Reducers/Addition/_acitons';
import arrow from '../images/arrow.png';

const type = ['All', 'Today', 'Tomorrow'];

function SelectTemp() {
  const dispatch = useDispatch();
  const { isOpenTemp, selectedTemp } = useSelector(({ DataReducer }) => {
    return {
      isOpenTemp: DataReducer.isOpenTemp,
      selectedTemp: DataReducer.selectedTemp,
    };
  });
  const openTemp = () => {
    dispatch(setOpenTemp());
  };
  const changeTemp = (value) => {
    dispatch(setSelectedTemp(value));
    switch (value) {
      case 'All':
        return dispatch(setSliceTemp(0, -1));
      case 'Today':
        return dispatch(setSliceTemp(0, 4));
      case 'Tomorrow':
        return dispatch(setSliceTemp(4, 11));
    }
  };
  return (
    <div className="select" onClick={openTemp}>
      <div className="select__selected">{selectedTemp}</div>
      <div className={isOpenTemp ? 'modal' : 'modal--disable'}>
        {type.map((element, index) => {
          return (
            <p className="type" key={index} onClick={(e) => changeTemp(e.target.innerHTML)}>
              {element}
            </p>
          );
        })}
      </div>
      <div>
        <img className={isOpenTemp ? 'arrow--rotate' : 'arrow'} src={arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default SelectTemp;
