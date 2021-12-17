import { useState, useEffect, React } from 'react';
import { useRouter } from 'next/router';

async function downloadBench(ticker, times){
    var er = await fetch('api/benchmark', {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        },
        body: JSON.stringify({
            tickers: ticker,
            earliestDate: ~~(times[0]/1000),
            today: ~~(times[1]/1000)
        }),
    }).then(res => res.json()).then(data => {

        var pb = data.chart.result[0].indicators.quote[0].close[0];
        var pa = data.chart.result[0].indicators.quote[0].close.at(-1);
        return 100*((pa-pb)/Math.abs(pb)).toFixed(3);
    });
    
    return er;

}

export default function Benchmark(props) {
    const [voo, setVoo] = useState(0);
    const [ndaq, setNdaq] = useState(0);
    const [sro, setSro] = useState(0);
    const [sgo, setSgo] = useState(0);
    
    
   useEffect(()=>{
    async function bench(){
        setVoo(await downloadBench("VOO", props.selection));
        setNdaq(await downloadBench("NDAQ", props.selection));
    }
       bench();
   })
    return (
        <div className='flex-container'>
            <div className='block25'>
                <p id='benchname'>S&P 500<br /> Benchmark</p>
                <div className={ (voo<0 ? 'downpercent' : 'uppercent')}>
                    <p>{voo.toFixed(2)}% <i className={ (voo<0 ? 'gg-arrow-down' : 'gg-arrow-up')}></i></p>
                </div>
            </div>
            <div className='block25'>
                <p id='benchname'>NASDAQ 100<br /> Benchmark</p>
                <div className={ (ndaq<0 ? 'downpercent' : 'uppercent')}>
                    <p>{ndaq.toFixed(2)}% <i className={ (ndaq<0 ? 'gg-arrow-down' : 'gg-arrow-up')}></i></p>
                </div>
            </div>
            <div className='block25'>
                <p id='benchname' style={{fontSize: "1.1vw",margin: "6px 0px 0px 0px"}}>
                    Sharesies<br /> Responsible Order
                </p>
                <div className={ (sro<0 ? 'downpercent' : 'uppercent')}>
                    <p>{sro.toFixed(2)}% <i className={ (sro<0 ? 'gg-arrow-down' : 'gg-arrow-up')}></i></p>
                </div>
            </div>
            <div className='block25'>
                <p id='benchname'>Sharesies<br /> Global Order</p>
                <div className={ (sgo<0 ? 'downpercent' : 'uppercent')}>
                    <p>{sgo.toFixed(2)}% <i className={ (sgo<0 ? 'gg-arrow-down' : 'gg-arrow-up')}></i></p>
                </div>
            </div>  
        </div>
    )
}