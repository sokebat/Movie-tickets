import { FaRegPaperPlane, FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#252D3C] w-full">
      <div className="container mx-auto flex items-center justify-between p-3">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <FaRegPaperPlane color="white" size={23} />
          <span className="text-white text-xl hover:text-blue-200">
            Movie-tickets
          </span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white text-xl hover:text-blue-200"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/concerts"
            className="text-white text-xl hover:text-blue-200"
            onClick={closeMenu}
          >
            Concerts
          </Link>
          <Link
            to="/movies"
            className="text-white text-xl hover:text-blue-200"
            onClick={closeMenu}
          >
            Movies
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
            style={{ backgroundColor: "#A15658" }}
          >
            Register
          </button>
        </div>

        <div className="md:hidden">
          <div onClick={toggleMenu}>
            <FaHamburger color="white" size={30} />
          </div>
          {open && (
            <div className="md:hidden absolute top-11 right-16 rounded-md w-24 bg-gray-800 p-4 flex flex-col items-center justify-center z-50">
              <Link
                to="/"
                className="block text-white text-xl mb-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/concerts"
                className="block text-white text-xl mb-2"
                onClick={closeMenu}
              >
                Concerts
              </Link>
              <Link
                to="/movies"
                className="block text-white text-xl mb-2"
                onClick={closeMenu}
              >
                Movies
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
