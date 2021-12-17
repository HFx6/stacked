import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Big from 'big.js';

import Header from "../components/header";
import Footer from "../components/footer";

import Chart from "../components/optichart";
import PieChart from "../components/optipie";

import loading from "../public/3.gif";

const table = "";

const before = [];
const after = [];
const bench = [];
const years = [];

const beforeperc = {};
const afterperc = {};

function addContent() {
  document.getElementsByClassName("left")[0].innerHTML = table.outerHTML;
}

export default function Optimize() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [value, setValue] = useState("2");
  const [yearSel, setYear] = useState(2010);
  // const [, updateState] = useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  async function getArticle() {
    var d = JSON.parse(localStorage.getItem('dataproc'));
    console.log(d);
    var t = new Big(0);
    for(var key in d){
      d[key] = new Big(d[key]);
      t = t.plus(new Big(d[key]));
    }
    var l = []
    var i = 1;
    for(var key in d){
      l.push(`symbol${i}=${key}`);
      l.push(`allocation${i}_1=${new Big(d[key]/t*100).toNumber()}`);
      i++;
    }
    var er = await fetch("api/opti", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        alloc: l.join("&"),
        version: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    return er;
  }
  async function masterHelper() {
    beforeperc = {};
    afterperc = {};
    before = [];
    after = [];
    bench = [];
    years = [];
    var el = await getArticle();
    var html = new DOMParser().parseFromString(el.data, "text/html");
    var beforeperchold = html.getElementsByClassName("table-condensed")[0];
    var afterperchold = html.getElementsByClassName("table-condensed")[1];
    beforeperchold.deleteRow(-1);
    afterperchold.deleteRow(-1);
    table = html.getElementsByClassName("table-condensed")[2];
    var chartcnt = html.getElementsByClassName("table-condensed")[8];
    for (var i = 2, row; (row = chartcnt.rows[i]); i++) {
      before.push(parseInt(row.cells[3].innerHTML.replace(/\$|,/g, "")));
      after.push(parseInt(row.cells[5].innerHTML.replace(/\$|,/g, "")));
      bench.push(parseInt(row.cells[7].innerHTML.replace(/\$|,/g, "")));
      years.push(parseInt(row.cells[0].innerHTML.replace(/\$|,/g, "")));
    }
    for (var i = 1, row; (row = beforeperchold.rows[i]); i++) {
      beforeperc[row.cells[0].innerHTML] = parseFloat(
        (parseFloat(row.cells[2].innerHTML) / 100.0).toFixed(2)
      );
    }
    for (var i = 1, row; (row = afterperchold.rows[i]); i++) {
      afterperc[row.cells[0].innerHTML] = parseFloat(
        (parseFloat(row.cells[2].innerHTML) / 100.0).toFixed(2)
      );
    }
  }
  function pietitle(){
      if(value==2){
        return "Maximize Sharpe Ratio";
      }
      if(value==4){
        return "Minimize Variance";
      }
      if(value==5){
        return "Minimize Conditional Value-at-Risk";
      }
      if(value==9){
        return "Risk Parity";
      }
      if(value==12){
        return "Maximize Kelly Criterion";
      }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoaded(false);
    await masterHelper();
    setLoaded(true);
    document.getElementsByClassName("left")[0].innerHTML = table.outerHTML;
    // forceUpdate();
  }

  useEffect(() => {
    if (localStorage.getItem("csvdata") == null) {
      router.push("/");
    } else {
      (async () => {
        await masterHelper();
        setLoaded(true);
        addContent();
      })();
    }
  }, [router]);

  return (
    <div>
      <Header />
      <div className="flex-container formcont">
        <div className="formblock">
          <form onSubmit={handleSubmit}>
            <select
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
            >
              <option value="2">Maximize Sharpe Ratio</option>
              <option value="4">Minimize Variance</option>
              <option value="5">Minimize Conditional Value-at-Risk</option>
              <option value="9">Risk Parity</option>
              <option value="12">Maximize Kelly Criterion</option>
            </select>
            {/* <i className="gg-info"></i> */}
            <button type="submit" className="submittbn">Optimize Now</button>
          </form>

          
        </div>
      </div>
      {loaded ? (
        <React.Fragment>
          <div className="flex-container">
            <div className="optiblock">
              <div className="content">
                <div className="dualcont">
                  <div className="left"></div>
                  <div className="right">
                    <PieChart data={beforeperc} title={"Provided Portfolio"} />
                    <PieChart
                      data={afterperc}
                      title={pietitle()}
                    />
                  </div>
                </div>
                <Chart
                  bench={bench}
                  labels={years}
                  before={before}
                  after={after}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="loading">
          <Image src={loading} id="lol" alt="loader" />
        </div>
      )}
      <Footer />
    </div>
  );
}
