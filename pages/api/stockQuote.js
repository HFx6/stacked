export default function handler(req, res) {

  if (req.method === 'POST') {

    const l = req.body.tickers
    var s = "";
    l.forEach(element => {
        s+=element+",";
    });
    s = s.slice(0, -1);
    fetch("https://query2.finance.yahoo.com/v7/finance/quote?symbols="+s)
    .then(res => res.json())
    .then(data => res.status(200).json({ data }));
  }
  
}
