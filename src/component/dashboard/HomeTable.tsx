// import React from 'react'
import { useState } from "react";
import addIcon from "../../assets/images/png/Plus.png";
import dropdown from "../../assets/images/png/dropdown.png";
import emailIcon from "../../assets/images/png/email.png";
import location from "../../assets/images/png/location.png";
import modalEmail from "../../assets/images/png/modalEmail.png";
import success from "../../assets/images/png/greenMark.png";
import close from "../../assets/images/png/closeIcon.png";
import Checkbox from "../../component/UI/Form/Checkbox";
import Input from "../../component/UI/Form/Input";
import Button from "../UI/Form/Button";
import { Link } from "react-router-dom";

function HomeTable() {
  const [addClient, setAddClient] = useState(false);
  const [email, setEmail] = useState("");
  const [generatePassword, setGeneratePassword] = useState(true);
  const [inviteModal, setInviteModal] = useState(false);
  const [successModal, setSuccessModdal] = useState(false);

  const handleSendInvite = () => {
    console.log(
      "Invite sent to:",
      email,
      "Generate Password:",
      generatePassword
    );
    setInviteModal(false);
    setSuccessModdal(true);
    // ();
  };

  const Clients = [
    {
      name: "James Shepherdson",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
  ];
  return (
    <div className=" w-[70%] h-[60%]  mt-[40px] ml-[50px] align-middle bg-white">
      <div className="flex justify-around w-[70%] h-[40px] align-middle  mb-4 ">
        <p className="self-center">Filter</p>
        <div
          style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}
          className="self-center h-[40px] w-[20%] text-center pt-2  cursor-pointer  "
        >
          All
        </div>
        <div
          style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}
          className="self-center h-[40px] w-[20%] text-center pt-2  cursor-pointer "
        >
          Attorney{" "}
        </div>
        <div
          style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}
          className="self-center h-[40px] w-[20%] text-center pt-2  cursor-pointer "
        >
          Client{" "}
        </div>
        <div
          style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}
          className="self-center h-[40px] w-[20%] text-center pt-2  cursor-pointer "
        >
          Lender
        </div>
      </div>
      <div className=" ml-[20px] underline-offset-1  flex justify-between  w-[95%]">
        <strong className="">Manually On-board</strong>
        <div
          className=" text-blue-600 text-xl font-inter flex cursor-pointer "
          onClick={() => setAddClient(!addClient)}
        >
          <img src={addIcon} alt="" className="h-[12px] w-[10px] self-center" />
          <p className="">Add Client</p>
          <img
            src={dropdown}
            alt=""
            className="h-[12px] w-[15px] self-center"
          />
        </div>
        {addClient && (
          <>
            <div className="w-[200px]  absolute top-[190px] right-[10%] rounded">
              {/* <p>Send a link</p> */}
              <Button
                onClick={() => {
                  setInviteModal(true);
                  setAddClient(false);
                }}
              >
                {" "}
                Send a link
              </Button>
              {/* <hr className="bg-gray-400 mt-1 mb-1" /> */}
              <Button> Manually fill form</Button>
            </div>
          </>
        )}
        {/* Invitaion modal below */}
        {inviteModal && (
          <div>
            <span
              style={{ backgroundColor: "#4b454521" }}
              className="overflow-hidden absolute left-0 top-0 bottom-0 right-0 bg-opacity-50 h-[100vh] w-full bg-transparent "
            ></span>
            <div className="max-w-md  z-100 bg-white w-[350px] p-6 rounded-lg shadow-lg text-center  absolute left-[37%] top-[30%]">
              <div className="flex justify-between items-center">
                <div>Send Invite Link</div>
                <button
                  onClick={() => {
                    setInviteModal(false);
                  }}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <img src={close} alt="" />
                </button>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full">
                  {/* <span className="text-2xl">✉️</span> */}
                  <img src={modalEmail} alt="" />
                </div>
                <label className="text-sm font-medium">
                  Enter email address of the recipient
                </label>
                <Input
                  required
                  label=""
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex items-center gap-2 w-full">
                  <Checkbox
                    label="Generate password"
                  />
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleSendInvite}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}
        {successModal && (
          <>
            <span
              onClick={() => setSuccessModdal(!successModal)}
              className="successPopup modalBackground absolute top-0 left-0 right-0 bottom-0 "
            ></span>
            <div className="successPopup  bg-white p-6 rounded-lg h-[400px] shadow-lg w-[450px] absolute left-[35%] top-[20%]">
              <div className="mt-[5%] ">
                <h2 className="text-center text-black text-lg font-semibold mt-10">
                  Success!
                </h2>
                <img
                  src={success}
                  className=" mt-10 mb-10 justify-self-center self-center"
                  alt=""
                />
                
                <p className="text-center text-gray-600 text-sm mb-4">
                  You have successfully added a client .
                </p>
              </div>
              <button
                className="relative -top-68 left-90 w-10 h-10 font-extrabold border-2 rounded-b-md pr-0 text-center"
                onClick={() => setSuccessModdal(false)}
              >
                &times;
              </button>
              <Button onClick={() => setSuccessModdal(false)} > Ok</Button>
            </div>
          </>
        )}
      </div>
      <hr className="w-[98%] ml-[10px] self-center" />
      <div className=" ml-[20px] underline-offset-1 mt-2 mb-2 flex justify-between  w-[95%]">
        <div className="">All</div>
        <div className=""> showing () of () </div>
      </div>

      {/* Table body section below  */}
      {Clients.map((client, i) => (
        <div
          key={i}
          style={{ backgroundColor: " rgba(255, 247, 209, 0.3)" }}
          className="flex flex-col md:flex-row items-center mb-2 justify-between p-4  rounded-lg shadow-sm w-full max-w-4xl"
        >
          <div className="flex items-center space-x-4   md:w-auto">
            <div className="grid w-full">
              <strong className="text-lg font-semibold"> {client.name}</strong>
              <div className="flex mb-1">
                <img src={emailIcon} alt="" className="mr-3 " />
                <p className="flex items-center text-gray-600 text-sm">
                  {client.email}
                </p>
              </div>
              <div className="flex">
                <img src={location} alt="" className="mr-3" />
                <p className="flex items-center text-gray-600 text-sm">
                  {client.address}
                </p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-[25%] md:mt-0 bg-blue-600 text-white h-[40px] px-4 py-2 rounded hover: font-bold">
            View client details
          </button>
        </div>
      ))}
    </div>
  );
}

export default HomeTable;
