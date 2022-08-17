import React from 'react'

export const Oauth = ({auth}) => {
  return (
    <div className="flex flex-col sm:flex-row  justify-between mt-2">
    <button className=" mx-auto  rounded-lg bg-white px-4 sm:mr-4 py-1 my-2  ">
    <i className="fab mr-2 fa-google" aria-hidden="true"></i>
      Sign {auth} with google
    </button>
    <button className="rounded-lg bg-white px-4 py-1 my-2 mx-auto">
    <i className="fab fa-apple mr-2" aria-hidden="true"></i>
      Sign {auth} with Apple
    </button>
  </div>
  )
}
