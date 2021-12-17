import { useEffect, React, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import dynamic from 'next/dynamic'
import Image from 'next/image'

import Big from 'big.js';

import Header from '../components/header';
import Footer from '../components/footer';

import Benchmarks from '../components/benchmarks';
import LeftBlock from '../components/leftblock';
import RightBlock from '../components/rightblock';

import loading from '../public/3.gif';

// what would be ideal
//
// dict of all owned stocks and their prices from first transaction and today
const stockDateData = {};
// keeping of every stock holdings per day
const dailyStockHoldings = {};
// todays holdings for pie chart and optimization, save in localstorage
const currentHoldings = {};
// ticker list
const tickers = [];
// csvdataobj
const csvObj = {}
// earliest holdings for historical data, and todays date
const earliestDate = new Date();
const Today = new Date();

const csvdata = {};

// downloads ticker close price for a period 
// "{2021-01-28: "242.639999",. . .}"
async function downloadHistory(ticker){
    var er = await fetch('api/history', {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        },
        body: JSON.stringify({
            tickers: ticker,
            earliestDate: ~~(earliestDate/1000),
            today: ~~(Today/1000)
        }),
    }).then(res => res.json()).then(data => {
        var arr = data.data.split('\n');     

        var jsonObj = {};
        var headers = arr[0].split(',');

        for(var i = 1; i < arr.length; i++) {
            
            var data = arr[i].split(',');
            jsonObj[data[0]] = new Big(data[2]);
        }

        return jsonObj
    });
    
    return er;

}

// create stockDateData

// create dailyStockHoldings
async function getGraphTimeline(){

    var getDaysArray = async function(start, end) {
        for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
            arr.push(new Date(dt).toISOString().slice(0,10));
        }
        return arr;
    };
    const d = await getDaysArray(new Date(earliestDate.toISOString().split('T')[0]), new Date(Today.toISOString().split('T')[0]));
    return d;
    
    
}

// parse csvdata
async function processData(){

    
    csvdata = localStorage.getItem("csvdata");

    var allTextLines = csvdata.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var l = [];

    earliestDate = new Date(allTextLines[1].split(',')[1]);
    const daylist = await getGraphTimeline();

    for(var key in daylist){
        dailyStockHoldings[daylist[key]] = {};
    }
    for (var i=1; i<allTextLines.length-1; i++) {
        var lineData = allTextLines[i].split(',');
        const OBJ_KEY = `${lineData[2]}`;
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
        if(OBJ_KEY in csvObj){
            csvObj[OBJ_KEY].Trades.push(lineData);     
             
            if (lineData[6] == "SELL"){

                var x = new Big(csvObj[OBJ_KEY].Quantity);
                var newQuantity = x.minus(lineData[4]).toNumber();
                csvObj[OBJ_KEY].Quantity = newQuantity;

                dailyStockHoldings[lineData[1]][OBJ_KEY] = Big(newQuantity);

                var x = new Big(csvObj[OBJ_KEY].Total);
                csvObj[OBJ_KEY].Total = x.minus(Big(lineData[10]).times(lineData[7])).toNumber();
            }else{

                var x = new Big(csvObj[OBJ_KEY].Quantity);
                var newQuantity = x.plus(lineData[4]).toNumber();
                csvObj[OBJ_KEY].Quantity = newQuantity;

                dailyStockHoldings[lineData[1]][OBJ_KEY] = Big(newQuantity);

                var x = new Big(csvObj[OBJ_KEY].Total);
                csvObj[OBJ_KEY].Total = x.plus(Big(lineData[10]).times(Big(lineData[7]).times(2))).toNumber();
            }
        }else{
            
            l.push(lineData[2]);
            stockDateData[OBJ_KEY] = await downloadHistory(OBJ_KEY)
            dailyStockHoldings[lineData[1]][OBJ_KEY] = Big(lineData[4]);
            csvObj[OBJ_KEY]={"Quantity" : Big(lineData[4]), "Total": Big(lineData[10]).times(Big(lineData[7]).times(2)),"Trades" : []};
            
        }
        
    }
    
    for(var key in l){
        if(csvObj[l[key]]["Quantity"]>0){
            currentHoldings[l[key]]=csvObj[l[key]].Quantity;
        }
    }

    function isEmpty(obj) {
        for(var prop in obj) {
          if(Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
          }
        }
      
        return JSON.stringify(obj) === JSON.stringify({});
      }

    var hold = dailyStockHoldings[earliestDate.toISOString().split('T')[0]];
    
    for(var key in dailyStockHoldings){
        if(isEmpty(dailyStockHoldings[key])){
            dailyStockHoldings[key] = hold;
        }else{
            hold = Object.assign({}, hold, dailyStockHoldings[key]);
            dailyStockHoldings[key] = hold;
        }
    }

    for(var key in currentHoldings){
        var temphold = new Big(currentHoldings[key]);
        var last = Object.keys(stockDateData[key])[Object.keys(stockDateData[key]).length-1];
        var newvalue = temphold.times(new Big(stockDateData[key][last]));
        currentHoldings[key] = new Big(newvalue.toFixed(2)).toNumber();
    }
    window.localStorage.setItem("dataproc", JSON.stringify(currentHoldings));

    return l;

}

export default function Portfolio() {
    
    const router = useRouter();
    const [loaded,setLoaded] = useState(false);
    const [selection, setSelection] = useState([earliestDate.getTime(), Today.getTime()]);

    // master function
    async function masterHelper(){
        console.log(tickers);
        if(!(tickers.length>0)){
            tickers = await processData();
        }
    }

    useEffect(() => {
        if(localStorage.getItem("csvdata") == null ){
            router.push('/')
        }else{
            (async () => {
                // await call master function, once its done, set loaded to true
                await masterHelper()
                setLoaded(true)
            })();
        }
      }, [router]);

    if(!loaded){
        return (
            <div>
                <Header />
                <div className='loading'>
                    <Image src={loading} id='lol' alt="loader"/>
                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div>
            <Header />
            <Benchmarks selection={selection}/>
            <div className='flex-container'>
                <LeftBlock series={dailyStockHoldings} data={stockDateData} LineData={csvdata} setSelection={setSelection}/>
                <RightBlock pie={currentHoldings} data={stockDateData}/>
            </div>
            <Footer />
        </div>
        )
}