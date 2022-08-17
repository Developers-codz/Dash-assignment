import React from "react";
import { Aside, Header, TopProduct,Activities, Schedule } from "../../components";


export const Dashboard = () => {
  return (
    <div className="flex">
      <Aside />
      <div className="sm:w-5/6 mt-6 mx-3 sm:ml-2">
        <Header title="Dashboard" />
        <div className=" sm:w-full  mt-2  p-2 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="relative my-2 sm:my-0 bg-green-100 rounded-2xl p-4 sm:w-1/4  mx-2">
              <i
                className="far fa-lg fa-money-bill-alt absolute right-4"
                aria-hidden="true"
              ></i>
              <div className="mt-6 mb-1">Total Revenues</div>
              <div className="text-2xl font-bold">$2,129,430</div>
            </div>
            <div className="relative my-2 sm:my-0 bg-amber-100 rounded-2xl p-4 sm:w-1/4  mx-2">
              <i
                className="far fa-lg fa-tags absolute right-4"
                aria-hidden="true"
              ></i>
              <div className="mt-6 mb-1">Total Transactions</div>
              <div className="text-2xl font-bold">1,520</div>
            </div>
            <div className="relative my-2 sm:my-0 bg-red-100 rounded-2xl p-4 sm:w-1/4  mx-2">
              <i
                className="far fa-lg fa-thumbs-up absolute right-4"
                aria-hidden="true"
              ></i>
              <div className="mt-6 mb-1">Total Likes</div>
              <div className="text-2xl font-bold">9,721</div>
            </div>
            <div className="relative my-2 sm:my-0 bg-purple-100 rounded-2xl p-4 sm:w-1/4 mx-2">
              <i
                className="far fa-lg fa-user-friends absolute right-4"
                aria-hidden="true"
              ></i>
              <div className="mt-6 mb-1">Total Users</div>
              <div className="text-2xl font-bold">892</div>
            </div>
          </div>
            <Activities />
          <div className="flex flex-col sm:flex-row sm:justify-between mt-4 ">
            <TopProduct />
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};
