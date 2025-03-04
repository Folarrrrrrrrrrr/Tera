import React from "react";
import { InputProps } from "../../../types/globalTypes";




  const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">{label}</label>
        <input
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />
      </div>
    );
  };
  
  export default Input;
  