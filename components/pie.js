import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function MyChart(props) {

  const series = [];
  const labels = [];
  const colorS = [];
  var data = props.data
  for(var key in data){
    series.push(data[key]);
    labels.push(key);
    // colorS.push("#" + ((1<<24)*Math.random() | 0).toString(16));
  }

  const options = {
    colors: ["#775DD0", "#FF4560", "#feb019", "#00e396", "#008ffb", "#b400fb", "#ff9645"],
    // theme: {
    //   palette: 'palette4' // upto palette10
    // },
    chart: {
      type: "donut",
      size: '100%',
    },
    labels: labels,
    legend: {
      show: true,
      position: "right",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
            size: '70%',
            borderRadius: 1,
            labels: {
              show: true,
              total: {
                showAlways: false,
              },
          },
        },
      },
    },
    stroke: {
        curve: "smooth",
        endShape: "round",
      },
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="donut" />
    </div>
  );
}