// import React from 'react'
import TopNav from "../../component/dashboard/TopSection"
import Sidebar from "../../component/dashboard/SideBar"
import HomeTable from "../../component/dashboard/HomeTable"


const  Dashboard =() =>{
  return (
    <div>
        <TopNav/>
        <div className="flex">
          <Sidebar/>
          <HomeTable/>
        </div>
    </div>
  )
}

export default Dashboard