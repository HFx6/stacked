import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import HB from '../components/holdingblock';

export default function Holdings(props) {
  
  function makeBlock(){
    var el = [];
    for(var key in props.data){
      var val = Object.keys(props.value[key]);
      el.push(<HB url={"https://drivewealth.imgix.net/symbols/"+key.toLowerCase()+".png"} name={key} key={key} amount={props.data[key]} price={props.value[key][val.at(-1)]}/>);
    }
    return el;
  }
  
  return (
    <React.Fragment>
      <p>Stock Holdings</p>
      <div id="holdings">
        {makeBlock()}
      </div>
    </React.Fragment>
  );
}