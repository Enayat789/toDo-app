import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=" bg-gray-100 flex flex-row justify-between items-center p-4 rounded-md">
      <div className=" text-blue-800">
        <RxHamburgerMenu size={40} className=" cursor-pointer" />
      </div>
      <div className=" font-bold text-2xl pr-3">
        <h2>Tudu</h2>
      </div>
    </div>
  );
};

export default Navbar;
