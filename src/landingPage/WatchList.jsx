import { watchlist } from "../data/Data";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Tooltip from "@mui/material/Tooltip";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";

import Decider from "./Decider";
import { DoughnutChart } from "./DoughnutChart.jsx";

function WatchListItem({ stock }) {
  let [watchListActions, setWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setWatchListActions(true);
  };

  const handleMouseLeave = (e) => {
    setWatchListActions(false);
  };

  return (
    <>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div
          className="items border-bottom table-row"
          style={{ display: "flex" }}
        >
          <p
            className={stock.isDown ? "loss" : "profit"}
            style={{ fontSize: "15px", fontWeight: "500" }}
          >
            {stock.name}
          </p>

          <div className="info ms-auto">
            <span
              style={{
                fontSize: "15px",
                fontWeight: "500",
                marginLeft: "6.5px",
              }}
            >
              {stock.percent}
            </span>
            {stock.isDown ? (
              <KeyboardArrowDownIcon
                className="arrowIcon loss"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginLeft: "8px",
                }}
              />
            ) : (
              <KeyboardArrowUpIcon
                className="arrowIcon profit"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginLeft: "6.5px",
                }}
              />
            )}
            <span
              className={stock.isDown ? "loss" : "profit"}
              style={{
                fontSize: "15px",
                fontWeight: "500",
                marginLeft: "6.5px",
              }}
            >
              {stock.price}
            </span>
          </div>
          <div className="hover-btn">
            {watchListActions && <WatchListEffect uid={stock.name} />}
          </div>
        </div>
      </li>
    </>
  );
}

let decider = false;
let uniqueCompany;

function WatchListEffect({ uid }) {
  let [open, setOpen] = useState(false);

  function handleBtnClick() {
    setOpen(!open);
    console.log(uid);
    uniqueCompany = uid;
    decider = open;
  }

  return (
    <>
      <Tooltip title="Buy (B)" arrow placement="top" onClick={handleBtnClick}>
        <Button variant="contained" color="primary" size="small">
          Buy
        </Button>
      </Tooltip>

      <Tooltip title="Sell (S)" arrow placement="top">
        <Button variant="contained" color="error" size="small">
          Sell
        </Button>
      </Tooltip>

      <Tooltip title="Analytics (A)" arrow placement="top">
        <Button variant="contained" color="success" size="small">
          <BarChartIcon />
        </Button>
      </Tooltip>

      <Tooltip title="More" arrow placement="top">
        <Button variant="contained" color="inherit" size="small">
          <MoreHorizIcon />
        </Button>
      </Tooltip>
    </>
  );
}

function WatchList() {
  let [babu, setBabu] = useState(false);

  function handleBabu() {
    setBabu(!babu);
  }

  const labels = watchlist.map((e) => e.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((e) => e.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mt-3">
      <div className="border-bottom" style={{ display: "flex" }}>
        <p className="fw-medium" style={{ fontSize: "15px" }}>
          Search eg:infy, bse, nifty, ful weekly, gold mcx
        </p>
        <span className="fw-medium ms-auto" style={{ fontSize: "15px" }}>
          {watchlist.length}/50
        </span>
      </div>

      <ul
        className="mt-2"
        style={{ listStyleType: "none", margin: "0", padding: "0" }}
        onClick={handleBabu}
      >
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      {decider && <Decider uid={uniqueCompany} />}

      <DoughnutChart data={data} />
    </div>
  );
}

export default WatchList;
