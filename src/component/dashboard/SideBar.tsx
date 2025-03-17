// import React from "react";
import  {SidebarItemProps} from "../../types/globalTypes"
import home from "../../assets/images/png/home.png"
import room from "../../assets/images/png/people.png"
import AI from "../../assets/images/png/Robot.png"
import account  from "../../assets/images/png/account.png"

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen mt-[5px] w-[16%] bg-white shadow-md p-6">
      {/* Sidebar Header */}
      <div className="text-lg font-bold text-gray-900 mb-6">Dashboard</div>

      {/* Menu Items */}
      <nav className="space-y-4">
        <SidebarItem icon={home} text="Home" active />
        <SidebarItem icon={room} text="Room" />
        <SidebarItem icon={AI} text="AI" />
        <SidebarItem icon={account} text="Account" />
      </nav>
    </div>
  );
};



const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active }) => {
  
  return (
    <div
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
        active ? "bg-blue-100 text-blue-600 font-bold" : "text-gray-600"
      } hover:bg-gray-200 transition-all`}
    >
      <img src={icon} alt="" />
      <span className="">{text}</span>
    </div>
  );
};

export default Sidebar;
