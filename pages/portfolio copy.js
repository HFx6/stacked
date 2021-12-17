import { useEffect, React, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import dynamic from 'next/dynamic'

import Big from 'big.js';


import Header from '../components/header';
import Footer from '../components/footer';

import Benchmarks from '../components/benchmarks';
import LeftBlock from '../components/leftblock';
import RightBlock from '../components/rightblock';

const csvdata = null;


// what would be ideal
//
// dict of all owned stocks and their prices from first transaction and today
const stockDateData = {};
// keeping of every stock holdings per day
const dailyStockHoldings = {};
// todays holdings for pie chart and optimization, save in localstorage
const currentHoldings = {};

const csvObj = {}
const totalValue = 0;
const totalSumNow = 0;

async function downloadHistory(ticker){

    var er = fetch('api/history', {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        },
        body: JSON.stringify({
        tickers: ticker
        }),
    }).then(res => res.json()).then(data => {
        var arr = data.data.split('\n');     

        var jsonObj = {};
        var headers = arr[0].split(',');

        for(var i = 1; i < arr.length; i++) {
            
            var data = arr[i].split(',');
            jsonObj[data[0]] = data[2];
        }

        return jsonObj
    });
    
    
    return await Promise.resolve(er)

}

async function processData(data) {
    var allTextLines = data.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var l = [];
    for (var i=1; i<allTextLines.length-1; i++) {
        var lineData = allTextLines[i].split(',');
        const OBJ_KEY = `${lineData[2]}&${lineData[3]}`;
        console.log(`portfolio value: $${(OBJ_KEY in csvObj) ? (Math.max(0, csvObj[OBJ_KEY].Total.toNumber())) : Big(lineData[10])}, ${lineData[6]} for $${Big(lineData[10])}`);
        if(OBJ_KEY in csvObj){
            csvObj[OBJ_KEY].Trades.push(lineData);     
             
            if (lineData[6] == "SELL"){
                var x = new Big(csvObj[OBJ_KEY].Quantity);
                csvObj[OBJ_KEY].Quantity=x.minus(lineData[4]);

                var x = new Big(csvObj[OBJ_KEY].Total);
                csvObj[OBJ_KEY].Total=x.minus(Big(lineData[10]).times(lineData[7]));
            }else{
                var x = new Big(csvObj[OBJ_KEY].Quantity);
                csvObj[OBJ_KEY].Quantity=x.plus(lineData[4]);

                var x = new Big(csvObj[OBJ_KEY].Total);
                csvObj[OBJ_KEY].Total=x.plus(Big(lineData[10]).times(Big(lineData[7]).times(2)));
            }
        }else{
            if(lineData[3]=="NZX"){
                l.push(`${lineData[2]}.NZ`);
                var f = OBJ_KEY.split("&");
                f[0] = f[0]+".NZ";
                OBJ_KEY = f.join("&");
            }else if(lineData[3]=="ASX"){
                l.push(`${lineData[2]}.AX`);
                var f = OBJ_KEY.split("&");
                f[0] = f[0]+".AX";
                OBJ_KEY = f.join("&");
            }
            l.push(lineData[2]);
            csvObj[OBJ_KEY]={"Quantity" : parseFloat(lineData[4]), "Total": Big(lineData[10]).times(Big(lineData[7]).times(2)),"Trades" : []};
            
        }
    }

    // console.log(csvObj);
    
    var er = fetch('api/stockQuote', {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        },
        body: JSON.stringify({
          tickers: l
        }),
      }).then(res => res.json()).then(data => {
          const dq = data.data.quoteResponse.result;
          var i = 0;
          for (const key in csvObj) {
            csvObj[key]["quote"] = dq[i].regularMarketPrice;
            csvObj[key]["currency"] = dq[i].currency;
            i++;
          };
          return csvObj;
      });

      return await Promise.resolve(er);
}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

async function summary(ud){
    for(const da in ud){
        var t = da.split("&");
        var er = await downloadHistory(t[0]);
        stockDateData[t[0]] = er;
        const array = ud[da];
        if(array.Quantity > 0){
            totalValue=Big(totalValue).plus(array.Total);
            totalSumNow=Big(totalSumNow).plus(Big(array.Quantity).times(array.quote));
        }
    }
    var change = Big(totalSumNow).minus(totalValue).div(totalValue.abs()).times(100);
    // document.getElementById('totalSum').innerHTML=totalValue.toNumber();
    document.getElementById('totalSumNow').innerHTML=formatter.format(totalSumNow.toFixed(2));
    // document.getElementById('totalChange').innerHTML=change.toFixed(2);
    console.log("------");
    console.log(totalValue.toNumber());
    console.log(totalSumNow.toFixed(2));
    console.log(change.toFixed(2));
    console.log(csvObj);
}
// var tomorrow = new Date('2021-01-28');
// tomorrow.setDate(tomorrow.getDate() + 1);
// Date('2021-10-02').getTime() / 1000


// if (typeof window !== 'undefined') {
    
// }

export default function Portfolio() {

    const router = useRouter()
    const [loaded,setLoaded] = useState(false)
    useEffect(() => {
        if(localStorage.getItem("csvdata") == null ){
            router.push('/')
        }else{
            
            (async () => {

                setLoaded(true)
                csvdata = localStorage.getItem("csvdata");
                const userData = await processData(csvdata);
                await summary(userData); 
                // var er = await downloadHistory("MSFT");
                // stockDateData["MSFT"] = er;
                console.log(stockDateData);
                

            })();
        }
      }, [router]);

    if(!loaded){
        return <div>loading. . .</div>
    }
    return (
        <div>
            <Header />
            <Benchmarks />
            <div className='flex-container'>
                <LeftBlock />
                <RightBlock />
            </div>
            <Footer />
        </div>
        )
}