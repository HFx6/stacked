import { loadGetInitialProps } from "next/dist/shared/lib/utils";


export default async function history(req, res) {
    if (req.method === 'POST') {
      fetch("https://www.portfoliovisualizer.com/optimize-portfolio?s=y&goal="+req.body.version+"&benchmark=-1&benchmarkSymbol=VOO&constrained=true&lastMonth=12&historicalVolatility=true&endYear=2021&mode=2&comparedAllocation=-1&startYear=2010&timePeriod=4&historicalReturns=true&robustOptimization=false&historicalCorrelations=true&firstMonth=1&groupConstraints=false&"+req.body.alloc)
      .then(res => res.text())
      .then(data => {
        res.status(200).json({data});
      })
      .catch(error => {
        res.json(error);
        res.status(404).end();
        return resolve();
      });
    }
  }
    