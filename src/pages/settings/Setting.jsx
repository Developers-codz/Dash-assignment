import { useState } from "react";
import { Aside, Header, Profile } from "../../components";

export const Setting = () => {
  const [isEyeOpen, setEyeOpen] = useState(false);
  return (
    <div className="flex">
      <Aside />
      <div className="w-full px-auto mx-2 sm:w-5/6 mt-6 sm:ml-2">
        <Header title="Settings" />
        <div className=" w-full  mt-6 flex justify-around flex-col sm:flex-row">
          <Profile />
          <div className="w-full px-4 my-4 sm:px-0 sm:my-0 sm:w-4/12">
            {" "}
            <div className="bg-white px-4 pt-4 pb-2 rounded-lg">
              <div className="font-medium">Account</div>{" "}
              <form className="bg-white flex justify-center items-center flex-col  rounded-lg px-5 py-4 relative">
                <label htmlFor="email" className="self-start ">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-slate-100 px-2 py-1 mb-3 rounded-lg  w-full"
                />
                <label htmlFor="password" className="self-start ">
                  Password
                </label>
                <div className="input-pass-wrapper w-full">
                  <input
                    type={isEyeOpen ? "text" : "password"}
                    name="password"
                    id="password"
                    className="bg-slate-100 px-2 py-1 mb-3 rounded-lg  w-full"
                  />
                  <i
                    className={isEyeOpen ? "fa fa-eye" : "fa fa-eye-slash"}
                    onClick={() => setEyeOpen((prev) => !prev)}
                    aria-hidden="true"
                  ></i>
                </div>
                <label htmlFor="confirm-password" className="self-start ">
                  Confirm Password
                </label>
                <div className="input-pass-wrapper w-full mb-7">
                  <input
                    type={isEyeOpen ? "text" : "password"}
                    name="confirm-password"
                    id="confirm-password"
                    className="bg-slate-100 px-2 py-1 mb-3 rounded-lg  w-full"
                  />
                  <i
                    className={isEyeOpen ? "fa fa-eye" : "fa fa-eye-slash"}
                    onClick={() => setEyeOpen((prev) => !prev)}
                    aria-hidden="true"
                  ></i>
                </div>
                <button className="bg-color-blue text-white px-5 py-1 rounded-lg my-2 absolute right-0 bottom-0">
                  Save
                </button>
              </form>
            </div>
            <div className="bg-white p-6 rounded-lg my-3">
              <h3 className="font-medium text-lg pb-2">Verification</h3>
              <div className="flex justify-between">
                <div>Two Step Verification</div>
                <i className="fa fa-lg text-green-600 fa-solid fa-toggle-on"></i>
              </div>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg my-3 text-center text-red-600">
              <h3 className="font-medium text-lg pb-3 ">Danger Zone</h3>
              <button className="border-solid border-2 border-red-600 rounded-lg w-full hover:text-white hover:bg-red-600 hover:font-bold py-1">Delete My Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
