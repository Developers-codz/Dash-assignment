import React, { useState, useEffect } from "react";
import { Aside, Header } from "../../components";
import profilePhoto from "../../assets/profilePhoto.png";
import { Loader } from "../../components/loader/Loader";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  const getSearchedData = (arr, query) =>
    arr.filter((ar) => {
      const q2 = query.toLowerCase();

      return (
        ar.name.toLowerCase().includes(q2) ||
        ar.email.toLowerCase().includes(q2)
      );
    });

  const searchedText = getSearchedData(users, searchText);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  return (
    <div className="flex">
      <Aside />
      <div className="sm:w-5/6 mt-6 mx-3 sm:ml-2 ">
        <Header title="Users" />
        <div className=" sm:w-11/12  mt-6 bg-white rounded-lg p-2 sm:p-6">
          <div className="user-header flex justify-between items-center flex-wrap">
            <div className="font-medium text-md grow order-1">User Records</div>
            <div className="input-pass-wrapper mx-auto mt-7 sm:mt-auto sm:mr-5 order-10 sm:order-2 ">
              <input
                type="text"
                name="searchText"
                value={searchText}
                id="searchbar"
                className="bg-slate-100 rounded-lg py-1 px-2"
                placeholder="Search in table.."
                onChange={searchHandler}
              />
              <i className="fa fa-search" area-hidden="true"></i>
            </div>
            <button className="border-solid border-2 border-slate-100 mx-2 px-3 rounded-md order-3">
              <i className="far fa-regular fa-filter mr-1"></i>
              Filter
            </button>
            <button className="bg-color-blue text-white mx-2 px-4 rounded-md order-4">
              + Add
            </button>
          </div>
          {users.length <= 0 ? (
            <div className="flex justify-center items-center h-96">
              <Loader />
            </div>
          ) : (
            <ul className=" mt-10">
              {searchedText.map((user, i) => {
                return (
                  <li
                    key={indexedDB}
                    className=" flex justify-around w-full text-xs sm:text-base odd:bg-slate-100 even:bg-slate-200 py-3 px-2 rounded-md my-4"
                  >
                    <img
                      src={profilePhoto}
                      alt="profile photo"
                      className="rounded-full w-5 h-5 sm:w-10 sm:h-10  mr:1 sm:mr-3"
                    />
                    <div className="sm:ml-4 sm:w-2/6  sm:place-items-start">
                      {user.name}
                    </div>
                    <div className="sm:w-2/6  sm:place-items-start">
                      {user.email}
                    </div>
                    <div className="hidden sm:block sm:w-1/6  sm:place-items-start">
                      Male
                    </div>
                    <div className="sm:w-1/6  sm:place-items-start">Admin</div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
