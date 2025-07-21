import { Holdings } from "../data/Data";

function Summary() {
  return (
    <div className="container mt-5 mb-5 border-bottom">
      <h3 className="border-bottom pb-3">Hi, User!</h3>

      <div className="info1 border-bottom pb-5">
        <div className="row">
          <h4 className="fs-5" style={{ margin: "2rem 0" }}>
            Equity
          </h4>

          <div className="col"></div>
          <div className="col-3 border-end">
            <h1>3.74k</h1>
            <p style={{ fontSize: "12px" }}>Margin available</p>
          </div>

          <div className="col"></div>
          <div className="col-4">
            <p style={{ fontSize: "12px" }}>Margins used 0</p>
            <p style={{ fontSize: "12px" }}>Opeming balance 3.74k</p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>

      <div className="info2  border-bottom pb-5">
        <div className="row">
          <h4 className="fs-5" style={{ margin: "2rem 0" }}>
            Holdings ({Holdings.length})
          </h4>

          <div className="col"></div>
          <div className="col-3 border-end">
            <h1 style={{ color: "#1cf004ff" }}>1.55k</h1>
            <p style={{ fontSize: "12px" }}>P&L</p>
          </div>

          <div className="col"></div>
          <div className="col-4">
            <p style={{ fontSize: "12px" }}>Current value 31.43k</p>
            <p style={{ fontSize: "12px" }}>Investment 29.88k</p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
