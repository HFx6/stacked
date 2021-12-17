export default async function history(req, res) {
    if (req.method === 'POST') {
      fetch("https://query2.finance.yahoo.com/v1/finance/search?q="+req.body.tickers.join(",")+"&quotesCount=0&newsCount=40")
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
    