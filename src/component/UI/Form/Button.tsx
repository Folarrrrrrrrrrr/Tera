import { ButtonProps } from "../../../types/globalTypes";
import React from "react";



const Button: React.FC<ButtonProps> = ({ isLoading, children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-blue-600 text-white font-medium py-3 rounded-lg w-full hover:bg-blue-700 disabled:bg-gray-400"
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
