import React from 'react'
import { Dashbg,SignUpForm } from '../../components'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div className="flex justify-center">
      <Dashbg />
      <div className="justify-center items-center flex-col sm:flex sm:w-4/6 ">
        <div className="flex flex-col  items-center mx-auto justify-between mt-4 sm:items-start ">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <div>Create an account to use dashboard</div>
          <div className="flex justify-between flex-col sm:flex-row mt-2 w-5/6 ">
            <button className="rounded-lg bg-white px-4 py-1 my-2 mx-auto sm:ml-0 sm:mr-3">
              <i className="fab fa-google mr-2" aria-hidden="true"></i>
              Sign up with google
            </button>
            <button className="rounded-lg bg-white px-4 py-1 my-2 mx-auto sm:ml-3">
            <i className="fab fa-apple mr-2" aria-hidden="true"></i>
              Sign up with Apple
            </button>
          </div>
          <SignUpForm />
          <div className="my-2 mx-10">
           Already have an account? <Link to="/login" className="text-color-blue" >Sign In here </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
