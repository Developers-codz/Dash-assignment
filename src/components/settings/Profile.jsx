import React from 'react'
import profilePhoto from "../../assets/profilePhotoLg.png";

export const Profile = () => {
  return (
    <div className=" px-4 mx-4 sm:mx-0 sm:w-6/12 bg-white rounded-lg  p-8 h-full">
    <div className="font-medium">Profile</div>
    <div className="flex flex-col sm:flex-row my-5">
      <div className="flex flex-col items-center mx-3">
        <img src={profilePhoto} alt="" className="rounded-full w-20" />
        <button className="rounded-md px-2 my-2 border-solid border-black border-2">
          Change
        </button>
      </div>
      <form className="sm:ml-12 relative w-fit">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col mb-3">
            <label htmlFor="firstname" className="self-start ">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="bg-slate-100 rounded-lg px-2 py-1  w-4/5 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname" className="self-start ">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="bg-slate-100 rounded-lg px-2 py-1  w-4/5 mx-2"
            />
          </div>
        </div>
        <label htmlFor="dob" className="self-start mb-1">
          Date Of Birth
        </label>
        <input
          type="date"
          name="dob"
          id="dob"
          className="bg-slate-100 px-2 rounded-lg  py-1 mb-3  w-full"
        />
         <label htmlFor="phone" className="self-start mb-1">
          Phone No
        </label>
        <input
          type="phone"
          name="phone"
          id="phone"
          className="bg-slate-100 px-2 rounded-lg  py-1 mb-3  w-full"
        />
         <label htmlFor="address" className="self-start mb-1">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className="bg-slate-100 px-2 rounded-lg py-1 mb-3  w-full"
        />
        <button className="bg-color-blue text-white px-5 py-1 rounded-lg my-2 absolute right-0 bottom-sm">Save</button>
      </form>
    </div>
  </div>
  )
}
