import { useState, useEffect } from "react";
import axios from "axios";

function Positions() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/showAllpositions").then((res) => {
      setPositions(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h4 className="fs-5">Positions ({positions.length})</h4>

      <table class="table border table-sm mt-4">
        <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>Curr. val</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={profClass}>
                  {(currVal - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Positions;
