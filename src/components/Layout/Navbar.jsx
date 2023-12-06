import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-[#252D3C] flex items-center justify-around p-3">
      <div className=" flex items-center gap-2">
        <FaRegPaperPlane color="white" size={23} />
        <span className="text-white text-xl  hover:text-blue-200">
          TickTicketing
        </span>
      </div>

      <div className="hidden  md:flex space-x-6">
        <Link to="/" className=" text-white text-xl hover:text-blue-200">
          Home
        </Link>

        <Link
          to="/concerts"
          className=" text-white text-xl hover:text-blue-200"
        >
          Concerts
        </Link>
        <Link to="/movies" className="text-white text-xl hover:text-blue-200">
          Movies
        </Link>
        <Link to="" className="text-white text-xl hover:text-blue-200">
          Theater Events
        </Link>
      </div>

      <div className="hidden md:flex gap-4">
        <button
          className="text-white text-xl hover:text-blue-200"
          type="button"
        >
          LogIn
        </button>
        <button
          className="text-white text-xl p-2 rounded-lg hover:text-blue-200"
          type="button"
          style={{ backgroundColor: "#E14658" }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
