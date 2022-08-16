import { useState } from "react";
import "./form.css"

export const SignUpForm = () => {
  const [isEyeOpen, setEyeOpen] = useState(false);
  return (
    <form className="mx-2 sm:w-5/6  bg-white flex justify-center items-center flex-col my-5 rounded-lg p-8">
        <div className="flex justify-between items-center w-full">

        <div className="flex flex-col">
            <label htmlFor="firstname" className="self-start ">First Name</label>
            <input type="text" name="firstname" id="firstname" className="bg-slate-100 px-2 py-1  w-4/5 " />
        </div>
        <div className="flex flex-col">
            <label htmlFor="lastname" className="self-start ">Last Name</label>
            <input type="text" name="lastname" id="lastname" className="bg-slate-100 px-2 py-1  w-4/5 mx-2" />
        </div>
        </div>
      <label htmlFor="email" className="self-start ">
        Email address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-slate-100 px-2 py-1  w-full"
      />
      <label htmlFor="password" className="self-start ">
        Password
      </label>
      <div className="input-pass-wrapper w-full">
      <input
        type={isEyeOpen ? "text" : "password"}
        name="password"
        id="password"
        className="bg-slate-100 px-2 py-1  w-full"
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
      <div className="input-pass-wrapper w-full">
      <input
        type={isEyeOpen ? "text" : "password"}
        name="confirm-password"
        id="confirm-password"
        className="bg-slate-100 px-2 py-1  w-full"
      />
      <i
        className={isEyeOpen ? "fa fa-eye" : "fa fa-eye-slash"}
        onClick={() => setEyeOpen((prev) => !prev)}
        aria-hidden="true"
      ></i>
      </div>
      <div className="flex justify-between items-center my-1">
        <input type="checkbox" id="terms-and-condition" className="mr-2" required/>
        <label htmlFor="terms-and-condition">
          I agree to the{" "}
          <span className="text-color-blue">terms and condition</span>
        </label>
      </div>
      <button className="bg-color-blue text-white w-full rounded-md my-2 py-1">
        Sign Up
      </button>
    </form>
  );
};
