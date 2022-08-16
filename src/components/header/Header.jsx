import React from "react";
import profileDP from "../../assets/profilePhoto.png";

export const Header = ({ title }) => {
  return (
    <div className="flex items-center flex-wrap">
      <div className="text-2xl font-bold grow order-1">{title}</div>
      
        <div className="input-pass-wrapper order-6 sm:order-2 mx-3  sm:mr-5 my-3 sm:my-0 w-full sm:w-auto">
          <input
            type="text"
            name=""
            id=""
            className="bg-white rounded-lg py-1 px-2 w-full"
            placeholder="Search.."
          />
          <i className="fa fa-search" area-hidden="true"></i>
        </div>
        <i
          className="far fa-bell mr-5 cursor-pointer fa-lg justify-end order-3"
          aria-hidden="true"
        ></i>
        <img
          src={profileDP}
          alt="profileDP"
          className="rounded-full sm:mr-5 cursor-pointer justify-end order-4"
        />
      </div>
   
  );
};
