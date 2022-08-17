import React, { useEffect, useState } from "react";
import chartData from "../../data/chartData.json"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);


export const Activities = () => {
  const [month,setMonth] = useState("May-June")
  const months = [
    "May-June",
    "July-August",
    "August-September",
    "September-October",
  ];
  const [dataSet,setDataSet] = useState({user:[100, 410, 130, 458, 190],guest:[200, 300, 150, 385, 170]})
  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      y: {
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
        data:dataSet.user ,
        borderColor: " rgb(34 197 94)",
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        label: "Guest",
        data: dataSet.guest,
        borderColor: "red",
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 1,
      },
    ],
    labels,
  };

  useEffect(() =>{
    for( let key in chartData){
      if(key === month) setDataSet(prev => ({...prev,user:chartData[key]["user"],guest:chartData[key]["guest"]}))
    }
    
  },[month])
  
  
  const changeHandler = (e) =>{
    setMonth(e.target.value)
  }
  return (
    <div className="bg-white mt-4 rounded-lg px-6 py-3">
      <div className="activity-head flex">
        <h3 className="grow">
          Activities
         <select value={month} className="bg-white outline-none text-slate-500 mx-2 text-sm" onChange={changeHandler}>
           {months.map((month,i) => <option value={month} key={i}>{month}</option>)}
         </select>
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
      <div className="w-9/12 h-360 mx-auto  my-2">
        {" "}
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
