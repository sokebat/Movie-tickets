import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

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
        <a href="#" className=" text-white text-xl hover:text-blue-200">
          Home
        </a>
        <a href="#" className=" text-white text-xl hover:text-blue-200">
          Concerts
        </a>
        <a href="#" className="text-white text-xl hover:text-blue-200">
          Movies
        </a>
        <a href="#" className="text-white text-xl hover:text-blue-200">
          Theater Events
        </a>
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
