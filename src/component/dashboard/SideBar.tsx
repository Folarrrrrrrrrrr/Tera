// import React from "react";
import  {SidebarItemProps} from "../../types/globalTypes"
import { NavLink } from "react-router-dom";
import home from "../../assets/images/png/home.png"
import room from "../../assets/images/png/people.png"
import AI from "../../assets/images/png/Robot.png"
import account  from "../../assets/images/png/account.png"

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen mt-[5px] w-[16%]  shadow-md p-6">
      {/* Sidebar Header */}
      <div className="text-lg font-bold text-gray-900 mb-6">Dashboard</div>

      {/* Menu Items */}
      <nav className="space-y-4 h-screen">
        <SidebarItem icon={home} text="Home" to="/dashboard/home" />
        <SidebarItem icon={room} text="Rooms" to="/dashboard/rooms" />
        <SidebarItem icon={AI} text="AI" to="/dashboard/ai" />
        <SidebarItem icon={account} text="Account" to="/dashboard/account" />
      </nav>
    </div>
  );
};



const SidebarItem: React.FC<SidebarItemProps & { to: string }> = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
          isActive ? "bg-blue-100 text-blue-600 font-bold" : "text-gray-600"
        } hover:bg-gray-200`
      }
    >
      <img src={icon} alt={text} />
      <span>{text}</span>
    </NavLink>
  );
};
export default Sidebar;
