import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questionMark from "../../assets/images/png/Group.png";
import back from "../../assets/images/png/back.png";
import bluePen from "../../assets/images/png/bluePen.png";
import blackPen from "../../assets/images/png/blackPen.png";
import "./SignatureInitial.css"
import SignaturePad from "../../component/UI/Form/SignaturePad";


const SignatureInitial = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<string>("create");
  // const [signature, setSignature] = useState("");
  const [initials, setInitials] = useState("");
  const [selectedSignature, setSelectedSignature] = useState<
    "signature" | "initial" | null
  >(null);
  const [showSuccess, setShowSuccess] = useState(false);


  // const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSignature(e.target.value);
  // };

  const handleInitialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitials(e.target.value);
  };

  return (
    <div className="grid h-{100vh} w-[100vw] bg-gray-100">
      <h5 className="text-xl h-[30px] font-bold text-center">
        Add your Signature & Initials
      </h5>

      {/* Sidebar */}
      <div className="flex justify-center items-center w-[100%] self-center ml-20 ">
        <button
          onClick={() => navigate(-1)}
          className="flex p-[5px] text-center items-center absolute left-[2%]"
        >
          <img src={back} alt="Back" />
          Back
        </button>

        <div
          className={`flex px-4 py-2 border rounded mr-5 transition-all ${
            activeButton === "create"
              ? "border-blue-500 text-blue-500 font-bold"
              : "border-gray-500 text-gray-500"
          }`}
          onClick={() => setActiveButton("create")}
         >
          <img
            src={activeButton === "create" ? bluePen : blackPen}
            className="h-[20px] justify-self-center self-center"
          />
          <p>Create Signature & Initials</p>
        </div>

        <div
          className={`flex px-4 py-2 border rounded transition-all ${
            activeButton === "adopt"
              ? "border-blue-500 text-blue-500 font-bold"
              : "border-gray-500 text-gray-500"
          }`}
          onClick={() => setActiveButton("adopt")}
        >
          <img
            src={activeButton === "adopt" ? bluePen : blackPen}
            className="h-[20px]"
          />
          <p>Adopt Signature & Initials</p>
        </div>
      </div>

      {/* Render section based on active button */}
      {activeButton === "create" ? (
        <div className="p-5 justify-center items-center w-[70%] h-[100vh] ml-[15%]">
          <div className="bg-white h-[500px] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create Signature</h2>

            <div className="mb-4">
              <label className="block font-medium mb-1">
                Sign here
                <img
                  src={questionMark}
                  className="relative -top-[20px] left-[75px] w-[13px]"
                />
              </label>
              {/* <input
                type="text"
                value={signature}
                onChange={handleSignatureChange}
                className="w-full border border-gray-300 rounded p-3"
                placeholder="Draw or type your signature"
              /> */}
              <SignaturePad/>
            </div>

            <div>
              <label className="block font-medium mb-1">
                Write your initials
                <img
                  src={questionMark}
                  className="relative -top-[20px] left-[128px] w-[13px]"
                />
              </label>
              <input
                type="text"
                value={initials}
                onChange={handleInitialsChange}
                className="w-full border border-gray-300 rounded p-3"
                placeholder="Type your initials"
              />
            </div>

            <button  onClick={() => setShowSuccess(true)} className="mt-[60px] bg-white text-black font-medium py-3 rounded-lg w-full hover:bg-blue-700 hover:text-white disabled:bg-gray-400">
              Continue
            </button>
          </div>
        </div>
      ) : activeButton === "adopt" ? (
        <div className="p-5 justify-center items-center w-[70%] h-[100vh] ml-[15%]">
         <div className="bg-white p-5 justify-center items-center w-[50%] h-[610px] ml-[25%]">
        <h2 className="text-xl text-black font-semibold mb-2">Adopt a Signature</h2>
        <p className="text-gray-600 mb-4">Choose a Signature or Initial to use when signing a document.</p>

          <div className="flex justify-evenly mb-2 gap-6 p-3 bg-gray-100">
            {/* Signature Box */}
            <input type="checkbox" className="mr-0"/>
            <div
              className={`w-1.5/3 h-[100px] border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                selectedSignature === "signature"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedSignature("signature")}
            >
              <h3 className="text-gray-500 text-sm">Signature</h3>
              <p className=" signatureFont text-2xl italic font-extralight ">John Doe</p>
              <p className="text-blue-500 text-sm mt-2">Use sign</p>
            </div>

            {/* Initial Box */}
            <div
              className={`w-1.5/3 h-[100px] border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                selectedSignature === "initial"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedSignature("initial")}
            >
              <h3 className="text-gray-500 text-sm">Initial</h3>
              <p className=" signatureFont text-2xl italic font-extralight">JD</p>
              <p className="text-blue-500 text-sm mt-2">Use initial</p>
            </div>
          </div>
              
          <div className="flex justify-evenly mb-2 gap-6 p-3 bg-gray-100">
            {/* Signature Box */}
            <input type="checkbox" className="mr-0"/>
            <div
              className={`w-1.5/3 h-[100px] border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                selectedSignature === "signature"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedSignature("signature")}
            >
              <h3 className="text-gray-500 text-sm">Signature</h3>
              <p className=" signatureFont text-2xl italic font-extralight ">John Doe</p>
              <p className="text-blue-500 text-sm mt-2">Use sign</p>
            </div>

            {/* Initial Box */}
            <div
              className={`w-1.5/3 h-[100px] border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                selectedSignature === "initial"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedSignature("initial")}
            >
              <h3 className="text-gray-500 text-sm">Initial</h3>
              <p className=" signatureFont text-2xl italic font-extralight">JD</p>
              <p className="text-blue-500 text-sm mt-2">Use initial</p>
            </div>
          </div>

          <div className="flex justify-evenly gap-6 p-3 bg-gray-100">
            {/* Signature Box */}
            <input type="checkbox" className="mr-0"/>
            <div
              className={`w-1.5/3 h-[100px] border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                selectedSignature === "signature"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedSignature("signature")}
            >
              <h3 className="text-gray-500 text-sm">Signature</h3>
              <p className=" signatureFont text-2xl italic font-extralight ">John Doe</p>
              <p className="text-blue-500 text-sm mt-2">Use sign</p>
            </div>

            {/* Initial Box */}
            <div
              className={`w-1.5/3 h-[100px] border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                selectedSignature === "initial"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedSignature("initial")}
            >
              <h3 className="text-gray-500 text-sm">Initial</h3>
              <p className=" signatureFont text-2xl italic font-extralight">JD</p>
              <p className="text-blue-500 text-sm mt-2">Use initial</p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => setShowSuccess(!showSuccess)}
            className="mt-[10px] w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium disabled:bg-white"
            disabled={!selectedSignature}
          >
            Submit
          </button>
        </div>
        </div>
      ) : null}

      {/* Success popup starts here  */}
      {showSuccess &&    
      <div className="signModal fixed inset-0 flex items-center justify-center">
      <span className="modalBackground absolute left-0 top-0 bottom-0 right-0 bg-opacity-50  bg-transparent "></span>
      <div className="z-100 bg-white w-[350px] p-6 rounded-lg shadow-lg text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">✔</span>
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-lg font-semibold">Profile created Successfully</h2>
        <p className="text-gray-500 text-sm mt-2">
          Your profile has been successfully created.
          <br />
          Let’s dive deep with Tera.
        </p>

        {/* CTA Button */}
        <button
          // onClick={onClose}
          onClick={()=>navigate("/brokerageSetup")}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700"
        >
          Set up Brokerage
        </button>
      </div>
      </div>
      }
    </div>
  );
};



export default SignatureInitial;
