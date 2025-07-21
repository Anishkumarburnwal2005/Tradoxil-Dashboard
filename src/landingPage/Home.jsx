import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import WatchList from "./WatchList";

export default function Home() {
  return (
    <div className="row">
      <div className="col-4 border-end">
        <Topbar />
        <WatchList />
      </div>
      <div className="col-8">
        <Dashboard />
      </div>
    </div>
  );
}
