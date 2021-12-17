import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import RB from '../components/recentblock';

export default function Recent(props) {

  //   function createElements(n){
  //     var elements = [];
  //     for(var i = 0; i < n; i++){
  //         elements.push(<li>{i}</li>);
  //     }
  //     return elements;
  // }
  //{/* {createElements(200)} */}
  const data = props.data.split("\n").reverse();
  function makeBlock(){
    var options = {
      year: 'numeric', month: 'long', day: 'numeric'
    };
    var elements = [];
    for(var i=1; i<data.length-1; i++){
      var n = data[i].split(",");
      elements.push(<RB signal={n[6]} name={n[2]} amount={props.formatter.format(n[10])} date={new Date(n[1]).toLocaleString('en-US', options)} key={i}/>);
    }
    return elements;
  }
  
  return (
    <React.Fragment>
      <p>Recent Transactions</p>
      <div id="recent">
        {makeBlock()}
      </div>
    </React.Fragment>
  );
}