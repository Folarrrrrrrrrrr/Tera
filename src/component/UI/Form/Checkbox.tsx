import React from "react";
import { CheckboxProps } from "../../../types/globalTypes";
  
  const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
    return (
      <div className="flex items-center gap-2">
        <input type="checkbox" {...props} className="bg-white   text-black w-4 h-4 border-2" />
        <label className="text-black text-sm">{label}</label>
      </div>
    );
  };
  
  export default Checkbox;
  