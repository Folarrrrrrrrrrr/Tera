import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questionMark from "../../assets/images/png/Group.png";
import right from "../../assets/images/png/rightAngle.png";
import signature from "../../assets/images/png/penIcon.png";
import solidSignature from "../../assets/images/png/signature-solid_svgrepo.png";

const SignatureInitial = () => {
    const navigate = useNavigate();

  const [signature, setSignature] = useState("");
  const [initials, setInitials] = useState("");

  const handleSignatureChange = (e) => {
    setSignature(e.target.value);
  };

  const handleInitialsChange = (e) => {
    setInitials(e.target.value);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-[17%] h-[80%] self-center rounded-lg ml-20 bg-white shadow-lg p-6">
    
        <button onClick={() => navigate(-1)} className=" absolute top-5  flex items-center text-blue-600 mb-4">&larr; Back</button>
        <div className="flex">
            <img src={signature} className="h-[20px] mt-[10px]" />
            <p className="text-blue-600 font-semibold py-2">Create Signature & Initials</p>
        </div>
        <div className="flex">
            <img src={solidSignature} className="h-[20px] mt-[10px]"/>
            <p className="py-2 text-gray-600">Adopt Signature & Initials</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-5">
        <h5 className="text-xl  font-bold mb-6">Add your Signature & Initials</h5>
        
        <div className="bg-white h-[85%] p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Create Signature</h2>
          
          <div className="mb-4">
            <label className="block font-medium mb-1">Sign here <img src={questionMark} className="relative -top-[20px] left-[75px] w-[13px]"/></label>
            <input 
              type="text"
              value={signature}
              onChange={handleSignatureChange}
              className="w-full border border-gray-300 rounded p-3"
              placeholder="Draw or type your signature"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Write your initials <img src={questionMark} className="relative -top-[20px] left-[128px] w-[13px]"/> </label>
            <input 
              type="text"
              value={initials}
              onChange={handleInitialsChange}
              className="w-full border border-gray-300 rounded p-3"
              placeholder="Type your initials"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureInitial;
