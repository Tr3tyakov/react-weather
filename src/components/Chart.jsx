import React from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';
import { setData } from './Reducers/Addition/_acitons';
import SelectTemp from './Selects/SelectTemp';
import SelectPressure from './Selects/SelectPressure';

const Chart = React.memo(function Chart({ temp, data, pressure, chart, city }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const i = 2;
    const n = 10;
    const ctx = document.getElementById('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    const gradientPressure = ctx.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(89, 82, 183, 1)');
    gradient.addColorStop(1, 'rgba(47, 48, 68, 0');

    gradientPressure.addColorStop(0, 'rgba(40, 70, 171, 1)');
    gradientPressure.addColorStop(1, 'rgba(47, 48, 68, 0)');

    const dataTemperature = {
      labels: data.slice(i, n),
      responsive: true,
      datasets: [
        {
          label: 'Temperature',
          data: temp.slice(i, n),
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
      labels: data,
      responsive: true,
      datasets: [
        {
          label: 'Pressure',
          data: pressure,
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
  }, [city]);
  return (
    <div className="chart">
      <div className="chart-wrap">
        <SelectTemp />
        <Line id="canvas" width={700} height={400} data={chart[0]} />
      </div>
      <div className="chart-wrap">
        <SelectPressure />
        <Line id="canvas" width={700} height={400} data={chart[1]} />
      </div>
    </div>
  );
});

export default Chart;