import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div className="flex items-center flex-col lg:flex-row">
        <div>
          <img
            src="./Images/Atul.png"
            alt="Pizza"
            className="w-32 h-32 p-2 m-2"
          />
        </div>
        <br></br>
        <div className="ml-4"> {/* Adjust margin left for proper alignment */}
          <h3 className="text-xl font-bold text-gray-600 p-2">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-3xl font-bold">Atul Stationer's</h1>
        </div>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here !"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-4 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] p-5"
        />
      </div>
    </nav>
  );
};

export default Navbar;
