import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  return (
    <div className="text-center mt-5">
      <h5 className="fw-semibold mb-3">Statistics of Instruments</h5>
      <Doughnut data={data} />
    </div>
  );
}
