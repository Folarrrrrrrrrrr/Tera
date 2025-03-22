// import React from "react";
import roomOne from "../../../assets/images/jpg/forthRoom.jpeg"
import roomTwo from "../../../assets/images/jpg/firstRoom.jpeg"
import roomThree from "../../../assets/images/jpg/secondRoom.jpeg"
import roomFour from "../../../assets/images/jpg/thirdRoom.jpeg"
import "./room.css"
import { Link } from "react-router-dom"
const rooms = [
  { name: "James Stephenson’s Room", image: roomOne },
  { name: "Scott Dunn’ Room", image: roomTwo },
  { name: "Christopher Wilkerson’s Room", image: roomThree },
  { name: "Kevin Evans’ Room", image: roomFour },
];

const Rooms = () => {
  return (
    <div className="w-[70%] mx-auto p-4 ">
      <h2 className="text-xl font-bold">All Rooms</h2>
      <p className="text-gray-500 mb-4">Enter a room to begin transactions.</p>
      <div className="grid  w-[100%]  gap-4">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="relative  rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-25 object-cover"
            />
            <div className=" backdropColor absolute inset-0 bg-opacity-50 flex items-center justify-between p-4">
              <h3 className="text-white font-semibold">{room.name}</h3>
              <Link to={"/dashboard/transactions"}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-[120px]">
                  Open
                </button>              
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
