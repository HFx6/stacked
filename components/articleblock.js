import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

function truncate(str, n){
  return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};

export default function ArticleBlock(props) {
  console.log(props.data.image);
  return (
    <React.Fragment>
        <div className="card" onClick={() => {window.open(props.data.url);}}>
            <div className="imgblock">
                <Image src={props.data.image} alt="Avatar" width="200px" height="200px" style={{width: "100%", transform: "scaleX(1) scaleY(1.5)", height: "157px"}}/>
            </div>
            <div className="card-container">
                <p className='cardtickers'>{props.data.tickers.join(" ")}</p>
                <p>{props.data.title}</p>
                <br />
                <p className="cardsummary">{truncate(props.data.summary, 100)}</p>
            </div>
        </div>
    </React.Fragment>
  );
}
