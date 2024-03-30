import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the visibility of the side menu
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // Function to toggle the side menu
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="bg-gray-100 flex flex-row justify-between items-center p-0 pt-2 pb-2 rounded-md relative">
      {/* Hamburger menu icon */}
      <div className="text-blue-800 relative">
        <RxHamburgerMenu
          size={40}
          className="cursor-pointer"
          onClick={toggleSideMenu} // Toggle side menu on click
        />
        {/* Side menu */}
        {isSideMenuOpen && (
          <div className="absolute top-full left-0 mt-2 w-max md:w-64 bg-white shadow-lg">
            {/* Close button */}
            <div className="flex justify-end p-2">
              <button
                onClick={toggleSideMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Close
              </button>
            </div>
            {/* Side menu content */}
            <ul className="py-2">
              <Link to={"/"}>
                <li className="px-6 py-2 border-b border-gray-200">Home</li>
              </Link>
              <Link to={"/showtodos"}>
                <li className="px-6 py-2 border-b border-gray-200">Todos</li>
              </Link>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        )}
      </div>

      {/* Logo */}
      <div className="font-bold text-xl md:text-2xl pr-3">
        <h2>Tudu</h2>
      </div>
    </div>
  );
};

export default Navbar;
