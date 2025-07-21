export default function Topbar() {
  return (
    <div className="text-center pt-3">
      <div className="row border-bottom">
        <div className="col topbarInfo fw-medium">
          <p className="infoPara">NIFTY</p>
          <p className="infoNum">0.00</p>
          <p className="infoNum">0</p>
        </div>

        <div className="col topbarInfo fw-medium">
          <p className="infoPara">SENSEX</p>
          <p className="infoNum">0.00</p>
          <p className="infoNum">0</p>
        </div>
      </div>
    </div>
  );
}
