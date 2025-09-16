import { funds } from "../data/Data";

function FundsPage() {
  return (
    <table class="table border table-sm mt-4">
      <thead>
        <tr>
          <th>Instrument</th>
          <th>LTP</th>
          <th>Change%</th>
          <th>Qty.</th>
          <th>Investment</th>
          <th>P&L</th>
        </tr>
      </thead>
      <tbody>
        {funds.map((fund, index) => {
          const profClass1 = fund.change > 0 ? "profit" : "loss";
          const profClass2 = fund.PL > 0 ? "profit" : "loss";

          return (
            <tr key={index} className={profClass2 ? "null" : "table-active"}>
              <td>{fund.name}</td>
              <td>{fund.LTP}</td>
              <td className={profClass1}>{fund.change}%</td>
              <td>{fund.Quantity}</td>
              <td>{fund.Investment}</td>
              <td className={profClass2}>{fund.PL.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// function FundsPage() {
//   return <h1>Haha</h1>;
// }

export default FundsPage;
