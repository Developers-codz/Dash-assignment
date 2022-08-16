import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
  responsive: true,
  plugins: {
    legend: false,
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
      },
      ticks: {
        stepSize: 100,
      },
    },
    x: {
      grid: {
        display: false,
      },
      axis: {
        display: false,
      },
    },
  },
};
const labels = ["", "Week 1", "Week 2", "Week 3", "Week 4"];
const data = {
  datasets: [
    {
      label: "User",
      data: [100, 410, 130, 458, 190],
      borderColor: " rgb(34 197 94)",
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      label: "Guest",
      data: [200, 300, 150, 385, 170],
      borderColor: "red",
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 1,
    },
  ],
  labels,
};

export const Activities = () => {
  return (
    <div className="bg-white mt-4 rounded-lg px-6 py-3">
      <div className="activity-head flex">
        <h3 className="grow">
          Activities
          <small className="block text-slate-600">May-June 2021</small>
        </h3>
        <div className="flex justify-center items-center mr-3">
          {" "}
          <div className="w-3 h-3 mr-1 bg-red-500 rounded-full"></div> Guest
        </div>
        <div className="flex justify-center items-center mr-3">
          {" "}
          <div className="w-3 h-3 mr-1 bg-green-500 rounded-full"></div>
          User
        </div>
      </div>
      {/* Chart */}
      <div className="w-9/12 mx-auto  my-2">
        {" "}
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
