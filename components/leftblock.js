import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Big from 'big.js';

import LineChart from '../components/chart';
import Recent from '../components/recent';

export default function Leftblock(props) {
    const [allperc, setAllPerc] = useState(0);
    
    const labels = [];
    const data = [];
    const LineData = {};
    const count = -1;
    for(var key in props.series){
        var datahold = new Big(0);
        labels.push(key);
        for(var subkey in props.series[key]){
            if(key in props.data[subkey]){
                var value = new Big(props.series[key][subkey]).times(new Big(props.data[subkey][key]));
                datahold = datahold.plus(value); 
            }
        }
        if(!(datahold.round(2)==0)){
            data.push(datahold.round(2));
        }else{
            data.push(data[count]);
        }
        count+=1;
        LineData[key] = [ ];
    }
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    var nhsplit = props.LineData.split("\n");
    for(var i=1; i<nhsplit.length-1; i++){
        var skey = nhsplit[i].split(",");      
        LineData[skey[1]].push([skey[6], skey[10]]);
    }
    
    var total= data.at(-1);
    var allPerc = 100*((total-allperc)/Math.abs(allperc)).toFixed(3);
    
    return (
        <div className='block70'>
            <p className='label'>Portfolio Overview</p>
            <p className='sublabel'>Total Holdings</p>
            <div className='total'>
                <p id='totalSumNow' className='label'>{formatter.format(total)}</p>
                <div className={ (allPerc<0 ? 'downpercent' : 'uppercent')}>
                    <p>{allPerc}% <i className={ (allPerc<0 ? 'gg-arrow-down' : 'gg-arrow-up')}></i></p>
                </div>
            </div>
            {/* <p id='totalSum'></p> */}
            {/* <p id='totalChange'></p> */}
            <LineChart series={labels} data={data} setPercSel={setAllPerc} LineData={LineData} setSelection={props.setSelection}/>
            <Recent data={props.LineData} formatter={formatter}/>
        </div>
    )
}