export default async function history(req, res) {
    if (req.method === 'POST') {
      fetch("https://finance.yahoo.com/caas/content/article/?uuid="+req.body.uuids.join(","))
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
    