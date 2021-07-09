import React from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';
import { setData } from './Reducers/addition/_acitons';
import SelectTemp from './selects/SelectTemp';
import SelectPressure from './selects/SelectPressure';

const type = ['All', 'Today', 'Tomorrow'];
const Chart = React.memo(function Chart({
  temp,
  data,
  pressure,
  chart,
  city,
  sliceTemp,
  slicePressure,
}) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const ctx = document.getElementById('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    const gradientPressure = ctx.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(89, 82, 183, 1)');
    gradient.addColorStop(1, 'rgba(47, 48, 68, 0');

    gradientPressure.addColorStop(0, 'rgba(40, 70, 171, 1)');
    gradientPressure.addColorStop(1, 'rgba(47, 48, 68, 0)');

    const dataTemperature = {
      labels: data.slice(sliceTemp.begin, sliceTemp.end),
      responsive: true,
      datasets: [
        {
          label: 'Temperature',
          data: temp.slice(sliceTemp.begin, sliceTemp.end),
          fill: true,
          tension: 0.5,
          backgroundColor: gradient,
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: gradient,
          pointBorderColor: 'gray',
          hoverBorderColor: 'white',
          pointRadius: 6,
          order: 0,
        },
      ],
    };
    const dataPressure = {
      labels: data.slice(slicePressure.begin, slicePressure.end),
      responsive: true,
      datasets: [
        {
          label: 'Pressure',
          data: pressure.slice(slicePressure.begin, slicePressure.end),
          fill: true,
          tension: 0.5,
          backgroundColor: gradientPressure,
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: gradientPressure,
          pointBorderColor: 'gray',
          hoverBorderColor: 'white',
          hoverBorder: 'pointer',
          pointRadius: 6,
          order: 1,
        },
      ],
    };

    dispatch(setData([dataTemperature, dataPressure]));
  }, [city, sliceTemp, slicePressure]);
  return (
    <div className="chart">
      <div className="chart-wrap">
        <SelectTemp type={type} />
        <Line id="canvas" width={700} height={400} data={chart[0]} />
      </div>
      <div className="chart-wrap">
        <SelectPressure type={type} />
        <Line id="canvas" width={700} height={400} data={chart[1]} />
      </div>
    </div>
  );
});

export default Chart;
