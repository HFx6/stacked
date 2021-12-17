import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Big from 'big.js';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

export default function MyChart(props) {

  var options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        autoScaleYaxis: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    labels: props.labels,
    yaxis: {
        labels: {
          formatter: function (value) {
            return formatter.format(value);
          }
        },
      },
  };
    const series = [{
        name: "Provided Portfolio",
        data: props.before
      },
      {
        name: "Maximum Sharpe Ratio",
        data: props.after
      },
      {
        name: 'Vanguard S&P 500 ETF',
        data: props.bench
      }
    ];
    
  return (
    <Chart className='chart' options={options} series={series} type='line' width='90%' height='450px'/>
  );
}
