import React from 'react';
import './Select.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenTemp, setSelectedTemp, setSliceTemp } from '../Reducers/addition/_acitons';
import arrow from '../images/arrow.png';

const SelectTemp = React.memo(function SelectTemp({ type }) {
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
    if (value === selectedTemp) {
      return;
    }
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
            <p
              className={selectedTemp === element ? 'type type--active' : 'type'}
              key={index}
              onClick={(e) => changeTemp(e.target.innerHTML)}>
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
});

export default SelectTemp;
