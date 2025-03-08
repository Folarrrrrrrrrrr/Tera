import { useState } from "react";
import React from "react";
import OtpInput from "react-otp-input";
import "./otpStyles.css";
import { Link } from "react-router-dom";
import Button from "../../../component/UI/Form/Button";
import success from "../../../assets/images/png/greenMark.png"


const OtpModal = () => {
  const [otp, setOtp] = useState("");
  const [successPopup, setSuccessPopup] = useState(false);

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP Entered:", otp);
    setSuccessPopup(true);
    // Add API call or verification logic here
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg h-[400px] shadow-lg w-[450px] relative left-[100%]">
        <div className="mt-[5%] ">
          <h2 className="text-center text-lg font-semibold">Enter OTP code</h2>
          <p className="text-center text-gray-600 text-sm mb-4">
            A 4 digit code has been sent to johndoe@gmail.com
          </p>
        </div>
        <form
          onSubmit={handleOTPSubmit}
          className="flex flex-col  h-50 mt-[5%] items-center "
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            shouldAutoFocus={true}
            containerStyle="flex w-[150px] mt-10 justify-center space-x-2"
            inputStyle="h-8 w-18 text-center border rounded-sm"
            renderInput={(props) => <input {...props} />}
          />

          <p className="text-center mt-10 text-gray-600 text-sm">
            Didn’t receive the code?{" "}
            <span className="text-blue-600 cursor-pointer">Resend code</span>
          </p>

          <button
            type="submit"
            className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>

      {
        successPopup && ( // Used logical AND to conditionally render success prompt
            <>
            <span onClick={() => setSuccessPopup(!successPopup)} className="successPopup modalBackground absolute top-0 left-0 right-0 bottom-0 "></span>
            <div className="successPopup  bg-white p-6 rounded-lg h-[400px] shadow-lg w-[450px] absolute left-[35%] top-[20%]">
                <div className="mt-[5%] ">
                <h2 className="text-center text-lg font-semibold mt-10">Success!</h2>
                <img src={success}  className=" mt-10 mb-10 justify-self-center self-center" alt="" />
                <p className="text-center text-gray-600 text-sm mb-4">
                    Your OTP has been verified successfully.
                </p>
                </div>
                <button
                className="relative -top-68 left-90 w-10 h-10 font-extrabold border-2 rounded-b-md pr-0 text-center"
                onClick={() => setSuccessPopup(!successPopup)}
                >
                &times;
                </button>
                <Link to="">
                    <Button type="submit" >Setup your Profile</Button>
                </Link>
            </div>
            </>
        )
      }
    </>
  );
};

export default OtpModal;