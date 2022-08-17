import React from "react";
import { Link } from "react-router-dom";
import { Dashbg, LoginForm, Oauth } from "../../components";


export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
     <Dashbg />
      <div className="justify-center items-center flex-col sm:flex sm:w-4/6 ">
        <div className="flex flex-col  items-center mx-auto justify-between mt-4 sm:items-start ">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <div>Sign in to your account</div>
          <Oauth auth="in" />
          <LoginForm />
          <div className="my-2 mx-10">
            Don't have an account? <Link to="/signup" className="text-color-blue" >Register here </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};
