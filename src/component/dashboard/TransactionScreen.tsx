import React, { useState } from "react";
// import Button  from "../../component/UI/Form/Button";
// import { Tabs, Tab } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";
// import { Pagination } from "@/components/ui/pagination";
import heroBanner from "../../assets/images/jpg/transactionBanner.jpeg"
import location from "../../assets/images/png/location.png"

const TransactionScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState("");

  const Transactions = [
    {
      name: "James Shepherdson",
      date:"Feb 6, 2025",
      Time:"12:04",
      volume:"1",
      status: "active",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      date:"Feb 6, 2025",
      Time:"12:04",
      volume:"1",
      status: "pending",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      date:"Feb 6, 2025",
      Time:"12:04",
      volume:"2",
      status: "active",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      date:"Feb 6, 2025",
      Time:"12:04",
      volume:"2",
      status: "closed",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      date:"Feb 6, 2025",
      Time:"12:04",
      volume:"1",
      status: "active",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      date:"Feb 6, 2025",
      Time:"12:04",
      volume:"1",
      status: "pending",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      date:"Feb 6, 2025",
      Time:"12:04",
      volume:"2",
      status: "pending",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
    {
      name: "James Shepherdson",
      date:"Feb 6, 2025",
      Time:"12:04",
      volume:"3",
      status:"closed",
      email: "Jamesshepherdson@gmail.com",
      address: "2342 Snide Street, Collarado Spring, CO 80923",
    },
  ];
  const TransactionsPerPage = 2; // Change this to adjust the number of Transactions per page
  
  const filteredTransactions = Transactions.filter(
    (transaction) =>
      transaction.status.toLowerCase() === activeTab
      
      // (transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      // transaction.email.toLowerCase().includes(searchTerm.toLowerCase())||
      // transaction.status.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination Logic
  

  const indexOfLastClient = currentPage * TransactionsPerPage;
  const indexOfFirstClient = indexOfLastClient - TransactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstClient,
    indexOfLastClient
  );
  const totalPages = Math.ceil(filteredTransactions.length / TransactionsPerPage);
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
    <div className="rounded w-[70%] h-[60%]  mt-[40px] ml-[50px] align-middle bg-white">
      {/* <div className="flex justify-around w-[70%] h-[40px] align-middle  mb-4 "></div> */}
      <div className="max-w-5xl mx-auto p-4">
        {/* Header Section */}
        
        <div className="relative">
          <img
            src={heroBanner}
            alt="Property"
            className="mt-[20px] w-full h-64 object-cover rounded-lg"
          />
          <div className="flex">
            <div className="absolute -top-[30px] left-0 text-black font-small text-lg">
              <strong>3979 Snider Stre...</strong>
              <img src="" alt="" />
            </div>
            <div className="absolute -top-[30px] text-blue-600 font-extrabold right-4">
            Create Transaction
            </div>
            <div className="flex absolute top-[89%] left-4 text-white font-small text-lg">
              <img src={location} alt="" />
              <strong className="underline ">3979 Snider Street, Colorado</strong>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <p>
            <strong className="text-gray-400">Type:</strong> <button className="p-2 bg-blue-200"> Buyer</button>
          </p>
          <p>
            <strong className="text-gray-400">Status:</strong> Under Contract
          </p>
        </div>

        {/* Table section */}

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
        {/* status toggling section   */}
        <strong className="font-bold"> Room History</strong>
        <div className="flex justify-around w-full h-[55px] bg-blue-100">
          <p onClick={()=> setActiveTab("active")} className={activeTab ==="active"?` w-[30%] text-center content-center h-[40px] self-center bg-white rounded cursor-pointer`:`cursor-pointer w-[30%] text-center content-center h-[40px] self-center rounded   hover:font-bold hover:text-gray-500 `}> Active Transactions </p>
          <p onClick={()=> setActiveTab("pending")} className={activeTab ==="pending"?` w-[30%] text-center content-center h-[40px] self-center bg-white rounded cursor-pointer`:`cursor-pointer w-[30%] text-center content-center h-[40px] self-center rounded  hover:font-bold hover:text-gray-500 `}> Pending Transactions </p>
          <p onClick={()=> setActiveTab("closed")} className={activeTab ==="closed"?` w-[30%] text-center content-center h-[40px] self-center bg-white rounded cursor-pointer `:`cursor-pointer w-[30%] text-center content-center h-[40px] self-center rounded  hover:font-bold hover:text-gray-500 `}> Closed Transactions </p>
        </div>
       {/* Transaction table */}
        {currentTransactions.map((transaction, i) => (
        <div
          key={i}
          style={{ backgroundColor: " rgba(255, 247, 209, 0.3)" }}
          className="flex flex-col md:flex-row items-center mb-2 justify-between p-4  rounded-lg shadow-sm w-full max-w-4xl"
        >
          <div className="flex items-center space-x-4   md:w-auto">
            <div className="grid w-full">
              <div className="flex">
                <p className="mb-1">Selling: <strong className=""> {transaction.volume} </strong> Property</p>
              </div>
              <div className="flex">
                <img src={location} alt="" className="mr-3" />
                <p className="flex items-center text-gray-600 text-sm">
                  {transaction.address}
                </p>
              </div>
            </div>
          </div>
          <div  className="flex justify-around mt-4 w-[25%] md:mt-0 text-gray-400 h-[40px] px-4 py-2 rounded hover: font-bold">
            <p>{transaction.date}</p>
            <p>{transaction.Time}pm</p>
          </div>
        </div>
      ))}


      </div>
    </div>
  );
};

export default TransactionScreen;
