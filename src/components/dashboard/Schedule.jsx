import React from 'react'

export const Schedule = () => {
  return (
    <div className="sm:w-1/2 rounded-lg py-2 px-4 sm:ml-4 bg-white">
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
  )
}
