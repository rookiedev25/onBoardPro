import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">Lorem.</h2>
          <form>
            <div className="mb-4 flex flex-row gap-4">
              <input
                id="email"
                type="text"
                name="email"
                placeholder="FirstName"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
              <input
                id="email"
                type="text"
                name="email"
                placeholder="LastName"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <input
                id="email"
                type="text"
                name="email"
                placeholder="ZID"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>

            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 disabled:opacity-25 transition">
                Register
              </button>
            </div>
            <div className="mt-6 text-center flex flex-row gap-1">
              <p>Already an user?</p>
              <Link to={"/login"}>
                <p className="cursor-pointer hover:underline">
                  Login
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
