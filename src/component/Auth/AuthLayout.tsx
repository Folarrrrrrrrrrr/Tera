// import React from "react";
import sideBox from "../../assets/images/png/welcomFrame.png";
import teraLogo from "../../assets/images/png/teraLogo.png"



const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children,}) => {
  return (
    <div className=" min-h-full min-w-full flex">
      <div className=" min-w-80 grid justify-center items-center bg-gray-50 p-10 ">
        <img src={teraLogo} alt="" className="relative -top-10  w-20"/>
        {children}
      </div>
      <img
        src={sideBox}
        alt=""
        className=" bottom-0 absolute right-0  "
      />
    </div>
  );
};

export default AuthLayout;
