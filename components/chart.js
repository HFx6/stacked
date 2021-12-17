import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Big from 'big.js';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function MyChart(props) {

  const startDate = props.series[0];
  const endDate = props.series[props.series.length-1];
  const [timeSelection, setValue] = useState("all");
  useEffect(() => {
    // props.setPercSel(60);
    calcChange();
    props.setSelection([new Date(startDate).getTime(), new Date(endDate).getTime()]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  function calcChange(){
    var total = new Big(0);

    for(var key in props.LineData){
      var h = props.LineData[key];
      if(h.length>0){
        for(var i in h){
          if(h[i][0]=="BUY"){
            total = total.plus(new Big(h[i][1]));
          }else{
            total = total.minus(new Big(h[i][1]));
          }
        }
        
        // console.log(h);
      }
      
    }
    props.setPercSel(total.toNumber());
  }
  function updateData(timeline) { 
    setValue(timeline)
    switch (timeline) {
      case 'one_month':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date(new Date(endDate).setMonth(new Date(endDate).getMonth() - 1)).getTime(),
          new Date(endDate).getTime()
          
        )
        props.setSelection([new Date(new Date(endDate).setMonth(new Date(endDate).getMonth() - 1)).getTime(), new Date(endDate).getTime()]);
        break
      case 'six_months':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date(new Date(endDate).setMonth(new Date(endDate).getMonth() - 6)).getTime(),
          new Date(endDate).getTime()
        )
        props.setSelection([new Date(new Date(endDate).setMonth(new Date(endDate).getMonth() - 6)).getTime(), new Date(endDate).getTime()]);
        break
      case 'one_year':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date(new Date(endDate).setFullYear(new Date(endDate).getFullYear() - 1)).getTime(),
          new Date(endDate).getTime()
        )
        props.setSelection([new Date(new Date(endDate).setFullYear(new Date(endDate).getFullYear() - 1)).getTime(), new Date(endDate).getTime()]);
        break
      case 'ytd':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date(new Date().getFullYear(), 0, 1).getTime(),
          new Date(endDate).getTime()
        )
        props.setSelection([new Date(new Date().getFullYear(), 0, 1).getTime(), new Date(endDate).getTime()]);
        break
      case 'all':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date(startDate).getTime(),
          new Date(endDate).getTime()
        )
        props.setSelection([new Date(startDate).getTime(), new Date(endDate).getTime()]);
        calcChange();
        break
      default:
    }
  }
  
  var options = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      zoom: {
        autoScaleYaxis: true
      },

      toolbar: {
        show: true,

        tools: {
          reset: false,
          customIcons: []
        },

      },
      events : {
        zoomed : (e, {xaxis}) => {
          props.setSelection([xaxis.min, xaxis.max])
        }
    }
    },
    
    colors: ['#F2708D'],
    dataLabels: {
      enabled: false
    },
    
    xaxis: {
      type: 'datetime',
      min: new Date(startDate).getTime(),
      tickAmount: 6,
    },

    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 1,
        gradientToColors: ["#FFFFFF00"],
        stops: [0, 100]
      }
    },

    timeSelection: 'all',
    labels: props.series,
    yaxis: {
      labels: {
        formatter: function (value) {
          return formatter.format(value);
        }
      },
    },
  };

    const series = [{
      data: props.data,
    }];
    
  return (
    <div className='chart'>
      <div className="toolbar">
        <button id="one_month" onClick={()=>updateData('one_month')} className={ (timeSelection==='one_month' ? 'seekactive' : '')}>
        1M
        </button>


        <button id="six_months" onClick={()=>updateData('six_months')} className={ (timeSelection==='six_months' ? 'seekactive' : '')}>
        6M
        </button>


        <button id="one_year" onClick={()=>updateData('one_year')} className={ (timeSelection==='one_year' ? 'seekactive' : '')}>
        1Y
        </button>


        <button id="ytd" onClick={()=>updateData('ytd')} className={ (timeSelection==='ytd' ? 'seekactive' : '')}>
        YTD
        </button>


        <button id="all" onClick={()=>updateData('all')} className={ (timeSelection==='all' ? 'seekactive' : '')}>
        ALL
        </button>
      </div>

      <div id="chart-timeline">
        <Chart className='chart' options={options} series={series} type='area' width='100%' height='250px'/>
        
      </div>
    </div>
  );
}
