import { useState, useEffect } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/showAllorders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h4 className="fs-5">Orders ({orders.length})</h4>

      <table class="table border table-sm mt-4">
        <thead>
          <tr>
            <th>Insrument</th>
            <th>Qty.</th>
            <th>LTP</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
