import React from "react";

function Header() {
  return (
    <div className=" flex justify-between h-24 flex-wrap shadow-lg bg-white bg-opacity-90 ">
      <div className=" m-auto md:ml-10 p-3 lg:ml-36 p-3">
        <img src="/swiggy-logo.png" alt="logo" className="w-15 h-10"></img>
      </div>
      <div className="m-auto lg:mr-16 mt-7 md:mr-16 mt-2 ">
        <form>
          <div className="bg-zinc-200 w-96 flex text-gray-900 border border-transparent rounded-xl p-1 pl-3 text-sm pr-2">
            <input
              id="default-search"
              className="w-full font-bold bg-zinc-200 text-white border-none outline-none"
              placeholder="Search for food and restaurants"
              required
            />
            <button className=" text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
