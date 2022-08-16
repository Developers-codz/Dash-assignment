import React from 'react'

export const LoginForm = () => {
  return (
    <form className="mx:2 sm:w-full bg-white flex justify-center items-center flex-col my-5 rounded-lg py-8 px-6">
            <label htmlFor="email" className="self-start ">
              Email address
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="bg-slate-100 px-2 py-1  w-full"
            />
            <label htmlFor="password" className="self-start ">
              Password
            </label>
            <input
              type="password"
              name=""
              id="password"
              className="bg-slate-100 px-2 py-1  w-full"
            />
            <button className="text-color-blue my-1 self-start">
              Forgot password ?
            </button>
            <button className="bg-color-blue text-white w-full rounded-md my-2 py-1">
              Sign In
            </button>
          </form>
  )
}
