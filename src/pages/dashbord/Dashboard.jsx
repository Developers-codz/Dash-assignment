import React from "react";
import { Aside, Header, TopProduct,Activities } from "../../components";


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
          {/* Activities */}
            <Activities />
          {/* top products */}
          <div className="flex flex-col sm:flex-row sm:justify-between mt-4 ">
          <TopProduct />
          <div className="w-1/2 rounded-lg py-2 px-4 ml-4 bg-white">
              <div className="flex">
                <div className="grow font-medium text-m">Today's schedule</div>
                <div className="text-sm text-slate-500">See all</div>
              </div>
              <div className="flex my-2 ml-2">
                <div className="bg-green-500 w-1 h-auto mr-2"></div>
                <div className="grow">
                  <h6 className="font-sm text-slate-600 text-sm">
                    Meeting with suppliers from Kuta Bali
                  </h6>
                  <small className="block text-slate-500">14:00-15:00</small>
                  <small className="block text-slate-500">
                    at Sunset Road, Kuta, Bali{" "}
                  </small>
                </div>
              </div>
              <div className="flex my-2 ml-2">
                <div className="bg-purple-500 w-1 h-auto mr-2"></div>
                <div className="grow">
                  <h6 className="font-sm text-slate-600 text-sm">
                    Check operation at Giga Factory 1
                  </h6>
                  <small className="block text-slate-500">18.00-20.00</small>
                  <small className="block text-slate-500">18.00-20.00</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
