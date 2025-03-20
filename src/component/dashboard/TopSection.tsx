import React from "react";
import bell from "../../assets/images/png/notification.png";
import picture from "../../assets/images/png/profilePhoto.png";
import logo from "../../assets/images/png/teraLogo.png";

const TopNav: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md px-6 py-3">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-6 h-6" />
        <span className="text-lg font-bold text-black">Tera</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6 ml-[10%]">
        <input
          type="text"
          placeholder="Search"
          className="w-3/4 px-4 py-2 border rounded-lg bg-gray-100 text-black focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* User Profile & Logout */}
      <div className="flex items-center space-x-4">
        <img
          src={bell}
          alt="User"
          className="w-8 h-8 rounded-full border border-gray-300"
        />
        <img
          src={picture}
          alt="User"
          className="w-8 h-8 rounded-full border border-gray-300"
        />
        <span className="text-sm text-black">Hi, John Doe</span>
        <button className="text-blue-600 hover:underline">Logout</button>
      </div>
    </div>
  );
};

export default TopNav;
