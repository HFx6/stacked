export default async function history(req, res) {
  if (req.method === 'POST') {
    fetch("https://query1.finance.yahoo.com/v7/finance/download/"+req.body.tickers+"?period1="+req.body.earliestDate+"&period2="+req.body.today+"&interval=1d&events=history")
    .then(res => res.text())
    .then(data => {
      res.status(200).json({ data });
    })
    .catch(error => {
      res.json(error);
      res.status(404).end();
      return resolve();
    });;
  }
}
  