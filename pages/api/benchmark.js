export default async function history(req, res) {
    if (req.method === 'POST') {
        console.log("https://query2.finance.yahoo.com/v8/finance/chart/"+req.body.tickers+"?period1="+req.body.earliestDate+"&period2="+req.body.today+"&interval=1wk");
      fetch("https://query2.finance.yahoo.com/v8/finance/chart/"+req.body.tickers+"?period1="+req.body.earliestDate+"&period2="+req.body.today+"&interval=1wk")
      .then(res => res.text())
      .then(data => {
        res.status(200).json(data);
      })
      .catch(error => {
        res.json(error);
        res.status(404).end();
        return resolve();
      });;
    }
  }
    