import { BrowserRouter, Routes, Route } from "react-router-dom";

import Summary from "./Summary";
import Orders from "./Orders";
import HoldingInfo from "./HoldingInfo";
import Positions from "./Positions";
import Funds from "./Funds";
import Menu from "./Menu";

function Dashboard() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route
            path="https://tradoxil-dashboard.onrender.com"
            element={<Summary />}
          />
          <Route
            path="https://tradoxil-dashboard.onrender.com/orders"
            element={<Orders />}
          />
          <Route
            path="https://tradoxil-dashboard.onrender.com/holdings"
            element={<HoldingInfo />}
          />
          <Route
            path="https://tradoxil-dashboard.onrender.com/positions"
            element={<Positions />}
          />
          <Route
            path="https://tradoxil-dashboard.onrender.com/funds"
            element={<Funds />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
