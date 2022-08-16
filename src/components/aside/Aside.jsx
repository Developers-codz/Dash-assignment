import React from "react";
import "./aside.css";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAside } from "../../context/asideContext";


export const Aside = () => {
  const {pathname} = useLocation();
  const {isDrawerOpen} = useAside()
  return pathname !=="/login" && pathname !== "/signup" ?  (
    <div className={`transition ease-in-out delay-500 fixed sm:block w-3/5 sm:static sm:w-1/5 sm:m-5 sm:rounded-3xl bg-color-blue aside text-white ${isDrawerOpen ? "left-46 z-10" : "-left-3/4"} `  }>
      <div className="h-1/6 flex text-3xl font-bold justify-center flex-col  ml-9">
        Dash.
      </div>
      <ul className="h-3/6  ml-9">
        <NavLink to="/" className="my-6 text-lg font-bold leading-5 cursor-pointer block">
          <i className="far mr-3 fa-regular fa-chart-pie"></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/" className="my-6 text-lg font-bold leading-5 cursor-pointer block">
        <i className="far mr-3 fa-tags"></i>
          <span>Transactions</span>
        </NavLink>
        <NavLink to="/" className="my-6 text-lg font-bold leading-5 cursor-pointer block">
        <i className="far mr-3 fa-calendar" aria-hidden="true"></i>
          <span>Schedule</span>
        </NavLink>
        <NavLink to="/users" className="my-7 text-lg font-bold leading-5 cursor-pointer block">
        <i className="far mr-3 fa-user-circle" aria-hidden="true"></i>
            <span>Users</span>
        </NavLink>
        <NavLink to="/settings" className="my-7 text-lg font-bold leading-5 cursor-pointer block">
        <i className="far mr-3 fa-cog" aria-hidden="true"></i>
          <span>Settings</span>
        </NavLink>
      </ul>
      <div className="h-2/6">
          <div className="h-1/3"></div>
      <ul className="h-1/3  ml-9 pb-6 mb-2">
        <li className="mb-2">Help</li>
        <li className="">Contact us</li>
      </ul>
      </div>

     
    </div>
  ) : <></>;
};
