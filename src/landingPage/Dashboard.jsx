import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<HoldingInfo />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/funds" element={<Funds />} />
      </Routes>
    </>
  );
}

export default Dashboard;
