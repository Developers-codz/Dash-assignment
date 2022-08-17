import React from 'react'
import { Dashbg,Oauth,SignUpForm } from '../../components'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div className="flex justify-center items-center h-4/6">
      <Dashbg />
      <div className="justify-center items-center flex-col sm:flex sm:w-4/6 ">
        <div className="flex flex-col  items-center mx-auto justify-between mt-4 sm:items-start ">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <div>Create an account to use dashboard</div>
          <Oauth auth="up" />
          <SignUpForm />
          <div className="my-2 mx-10">
           Already have an account? <Link to="/" className="text-color-blue" >Sign In here </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
