import React from "react";
import { Link } from "react-router-dom";
import { Dashbg, LoginForm } from "../../components";

import "./form.css";

export const Login = () => {
  return (
    <div className="flex justify-center">
     <Dashbg />
      <div className="justify-center items-center flex-col sm:flex sm:w-4/6 ">
        <div className="flex flex-col  items-center mx-auto justify-between mt-4 sm:items-start ">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <div>Sign in to your account</div>
          <div className="flex flex-col sm:flex-row mx-auto justify-between mt-2">
            <button className=" mx-auto  rounded-lg bg-white px-4 sm:mr-4 py-1 my-2  ">
            <i className="fab mr-2 fa-google" aria-hidden="true"></i>
              Sign in with google
            </button>
            <button className="rounded-lg bg-white px-4 py-1 my-2 mx-auto">
            <i className="fab fa-apple mr-2" aria-hidden="true"></i>
              Sign in with Apple
            </button>
          </div>
          <LoginForm />
          <div className="my-2 mx-10">
            Don't have an account? <Link to="/signup" className="text-color-blue" >Register here </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
