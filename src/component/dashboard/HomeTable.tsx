// import React from 'react'
import { useState } from "react";
import addIcon from "../../assets/images/png/Plus.png";
import dropdown from "../../assets/images/png/dropdown.png";
import emailIcon from "../../assets/images/png/email.png";
import location from "../../assets/images/png/location.png";
import modalEmail from "../../assets/images/png/ModalEmail.png";
import success from "../../assets/images/png/greenMark.png";
import close from "../../assets/images/png/closeIcon.png";
import Checkbox from "../../component/UI/Form/Checkbox";
import Input from "../../component/UI/Form/Input";
import Button from "../UI/Form/Button";
// import { Link } from "react-router-dom";

function HomeTable() {
  const [addClient, setAddClient] = useState(false);
  const [email, setEmail] = useState("");
  const [generatePassword] = useState(true);
  const [inviteModal, setInviteModal] = useState(false);
  const [successModal, setSuccessModdal] = useState(false);
  const [clientDetailsModal, setClientDetailsModal] = useState(false);



  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const clientsPerPage = 5; // Change this to adjust the number of clients per page
  
  

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
  //add client form begins here

  const [clientForm, setClientForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    country: "",
    zipCode: "",
    communicationMethod: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 5000); // Simulated API call
    console.log(form);
    setShowSuccess(true);
    setClientForm(false);
  };

  const formData = new FormData();
  formData.append("fullName", form.fullName);
  formData.append("phone", form.phone);
  formData.append("email", form.email);
  formData.append("country", form.country);
  formData.append("country", form.country);
  formData.append("zipCode", form.zipCode);
  formData.append("communicationMethod", form.communicationMethod);

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
  const filteredClients = Clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);
  const getPageNumbers = () => {
    const pages = [];
    const maxPageNumbersToShow = 5; // Adjust this for more/less visible numbers

    if (totalPages <= maxPageNumbersToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
    return pages;
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  

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
          <div className="flex justify-between items-center mb-2">
        <input
          type="text"
          placeholder="Search name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-[100%]"
        />
      </div>
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
              <Button
                onClick={() => {
                  setClientForm(true);
                  setAddClient(false);
                }}
              >
                {" "}
                Manually fill form
              </Button>
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
                  <Checkbox label="Generate password" />
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
                  You have successfully invited client .
                </p>
              </div>
              <button
                className="relative -top-68 left-90 w-10 h-10 font-extrabold border-2 rounded-b-md pr-0 text-center"
                onClick={() => setSuccessModdal(false)}
              >
                &times;
              </button>
              <Button onClick={() => setSuccessModdal(false)}> Ok</Button>
            </div>
          </>
        )}
        {clientForm && (
          <>
            <span
              // onClick={() => setSuccessModdal(!successModal)}
              className="successPopup modalBackground absolute top-0 left-0 right-0 bottom-0 "
            ></span>
            <div className="successPopup  bg-white p-6 rounded-lg h-[470px] shadow-lg w-[450px] absolute left-[35%] top-[20%]">
              <img
                src={close}
                alt=""
                onClick={() => setClientForm(false)}
                className=" w-[18px] h-[20px] relative left-[380px] -top-[8px] p-1 rounded hover:bg-blue-300"
              />
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  label=""
                  placeholder="Enter your full name"
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
                <Input
                  label=""
                  placeholder="Enter your number"
                  type="number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <Input
                  label=""
                  placeholder="Enter email adress"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label=""
                  placeholder="Enter street address"
                  type="text"
                  name="streetAddress"
                  value={form.streetAddress}
                  onChange={handleChange}
                  required
                />
                <Input
                  label=""
                  placeholder="Enter country/State"
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                />
                <Input
                  label=""
                  placeholder="Enter your zip code"
                  type="number"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                  required
                />
                <select
                  name="communicationMethod"
                  value={form.communicationMethod}
                  onChange={handleChange}
                  className=" bg-white border w-[100%] h-[33px] text-gray-500 font-light  border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" className="text-gray-500 font-light">
                    Preferred Communication Method
                  </option>
                  <option value="Email" className="text-gray-500 font-light">
                    {" "}
                    Email
                  </option>
                  <option value="Phone" className="text-gray-500 font-light">
                    {" "}
                    Phone Number{" "}
                  </option>
                </select>
                <Button type="submit" isLoading={loading}>
                  Continue
                </Button>
              </form>
            </div>
          </>
        )}
        {/* Success popup starts here  */}
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <div className="bg-white w-[350px] p-6 rounded-lg shadow-lg text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">✔</span>
                </div>
              </div>

              {/* Success Message */}
              <h2 className="text-lg text-black font-semibold"> Success</h2>
              <p className="text-gray-500 text-sm mt-2">
                Client added successfully
              </p>

              {/* CTA Button */}
              <button
                // onClick={onClose}
                onClick={() => setShowSuccess(false)}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
      <hr className="w-[98%] ml-[10px] self-center" />
      <div className=" ml-[20px] underline-offset-1 mt-2 mb-2 flex justify-between  w-[95%]">
        <div className="">All</div>
        <div className=""> showing 1 of {totalPages} </div>
      </div>

      {/* Table body section below  */}
      {currentClients.map((client, i) => (
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
          <button onClick={()=>setClientDetailsModal(true)} className="mt-4 w-[25%] md:mt-0 bg-blue-600 text-white h-[40px] px-4 py-2 rounded hover: font-bold">
            View client details
          </button>
        </div>
      ))}

      {
        clientDetailsModal && (
        <div>
           <span
              style={{ backgroundColor: "#4b454521" }}
              className="overflow-hidden absolute left-0 top-0 bottom-0 right-0 bg-opacity-50 h-[100vh] w-full bg-transparent "
            ></span>
            <div className="max-w-md  z-100  w-[450px] p-6 rounded-lg shadow-lg text-center  absolute left-[37%] top-[20%]">
              <div className="max-w-md bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-[10px]">
                  <div>Client Details</div>
                  <img src={close} alt="" onClick={ ()=>setClientDetailsModal(false)} className="text-gray-500 w-[18px] h-[20px] p-1 rounded hover:bg-blue-300"/>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg">Personal Information</h3>
                  <div className="mt-2 space-y-1">
                    <p><strong>Full Name:</strong> James Stephenson</p>
                    <p><strong>Email:</strong> jamesstephenson@gmail.com</p>
                    <p><strong>Phone:</strong> 860-575-9073</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                  <h3 className="font-semibold text-lg">Address</h3>
                  <div className="mt-2 space-y-1">
                    <p><strong>Street:</strong> 2122 Clinton Street</p>
                    <p><strong>City:</strong> Wallingford</p>
                    <p><strong>County:</strong> Dallas</p>
                    <p><strong>State:</strong> Delaware</p>
                    <p><strong>Zipcode:</strong> 80903</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">Go to Room</Button>
              </div>             
            </div>
        </div>
        )
      }

      {/* Pagination Controls */}
      
      <div className="flex space-x-2 p-4 justify-center">
        <button  style={{ backgroundColor: "rgba(238, 238, 238, 1)" }} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 border rounded">&larr;</button>
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            className={`px-3 py-1 border rounded ${page === currentPage ? "bg-gray-300" : ""}`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
        <button  style={{ backgroundColor: "rgba(238, 238, 238, 1)" }} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1  border rounded">&rarr;</button>
       </div>
    </div>
  );
}

export default HomeTable;
