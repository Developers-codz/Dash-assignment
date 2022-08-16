import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Legend);
const data = {
  datasets: [
    {
      data: [55,31,14],
      backgroundColor: [
        'green',
        'red',
        'yellow',
      ],
      border:"none"
    },
  ],
};

export const TopProduct = () => {
  return (
    <div className="w-1/2 rounded-lg py-2 px-4 mr-4 bg-white">
    <div className="flex">
      <div className="grow font-medium text-m">Top Products</div>
      <div className="text-sm text-slate-500">May-June 2021</div>
    </div>
    <div className='flex justify-around'>

    <div className="w-1/3 h-48">
      <Pie data={data}  />
    </div>
    <div  className='w-1/2 flex items-start flex-col mt-4'>
      <div className='flex justify-center items-center'>
      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
      <span className='font-medium'> Basic Trees
      </span>
      </div>
      <p className='ml-4 text-sm text-slate-500'>55%</p>
      <div className='flex justify-center items-center'>
      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
      <span className='font-medium'> Custom Short Plants</span>
      </div>
      <p className='ml-4 text-sm text-slate-500'>31%</p>
      <div className='flex justify-center items-center'>
      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
      <span className='font-medium'> Super Hoodies</span>
      </div>
      <p className='ml-4 text-sm text-slate-500'>41%</p>
    </div>
    </div>
  </div>
  )
}
