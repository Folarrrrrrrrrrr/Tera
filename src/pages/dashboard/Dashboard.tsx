// import React from 'react'
import TopNav from "../../component/dashboard/TopSection"
import Sidebar from "../../component/dashboard/SideBar"
import { Outlet } from "react-router-dom";


const  Dashboard =() =>{
  return (
      <div>
          <TopNav/>
          <div className="flex">
            <Sidebar />
            <Outlet/>
      </div>
      </div>
  )
}

export default Dashboard