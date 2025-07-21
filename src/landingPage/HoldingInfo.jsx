// import { Holdings } from "../data/Data";

import { useState, useEffect } from "react";
import axios from "axios";
import { VerticalBarChart } from "./VerticalBarChart";

function HoldingInfo() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/showAllheadings").then((res) => {
      setHoldings(res.data);
    });
  }, []);

  const labels = holdings.map((holding) => holding.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Holding's Price",
        data: holdings.map((holding) => holding.price),
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h4 className="fs-5">Holdings ({holdings.length})</h4>

      <table class="table border table-sm mt-4">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Curr. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index} className={isProfit ? "null" : "table-active"}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={profClass}>
                  {(currVal - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <VerticalBarChart data={data} />
    </div>
  );
}

export default HoldingInfo;
