import { useState } from "react";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import Checkbox from "../../component/UI/Form/Checkbox";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import eyeSlash from "../../assets/images/png/eyeslash.png";
// import "react-phone-input-2/lib/style.css";
import sideBox from "../../assets/images/png/welcomFrame.png";
import success from "../../assets/images/png/greenMark.png";
import teraLogo from "../../assets/images/png/teraLogo.png";
// import success from "../../../assets/images/png/greenMark.png"


const Signup = () => {
  const navigate = useNavigate();

  // const [phone, setPhone] = useState("");
  const [form, setForm] = useState({
    state: "",
    licenseNumber: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword:""
  });
  const [otpValue, setOtpValue] = useState("");
  const [otpModal, setOtpModal] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulated API call
    console.log(form);
    localStorage.setItem("userData", JSON.stringify(form)); 
    setOtpModal(!otpModal)
  };

  //modal implementation
 
    const handleOTPSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("OTP Entered:", otpValue);
      setSuccessPopup(true);
      setOtpModal(false)
      // Add API call or verification logic here
    };
  

  return (
    <div className=" pl-15 absolute top-0 bottom-0 right-0 left-0  content-center">
      <div className="">
        <img src={teraLogo} alt="" className="h-[6%] w-[5%] absolute top-2" />
        <div className="w-[50%] pb-[3px] pt-[2px] self-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-black font-medium  mb-0">Create an account</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              label=""
              placeholder="Enter your state"
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              required
            />
            <Input
              label=""
              placeholder="Enter License number"
              type="text"
              name="licenseNumber"
              value={form.licenseNumber}
              onChange={handleChange}
              required
            />
            <Input
              label=""
              placeholder="Enter full name"
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <Input
              label=""
              placeholder="Enter your email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              label=""
              placeholder="Enter phone number"
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            
            <div className=" flex flex-col w-[100%] ">
              <Input
                label=""
                placeholder="Enter password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <img
                src={eyeSlash}
                alt=""
                className="w-[15px] h-[15px] self-center relative left-[45%] -top-[24px] "
              />
            </div>
            <div className=" -mt-[3%] flex flex-col w-[100%] ">
              <Input
                label=""
                placeholder="confirm password"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
              <img
                src={eyeSlash}
                alt=""
                className="w-[15px] h-[15px] self-center relative left-[45%] -top-[24px] "
              />
            </div>
            <Checkbox
            className="bg-white text-black"
            label="By clicking Sign up, you confirm that you have read, understood, and agreed to our Terms and Conditions and Privacy Policy."
            required
          />
          <Button type="submit" isLoading={loading}>
            Sign up
          </Button>
          </form>
        </div>
        <p
          onClick={() => navigate("/login")}
          className="ml-[16%] mt-[2%] text-black"
        >
          Already have an account?{" "}
          <span className="text-blue-950 cursor-pointer"> Login </span>
        </p>
      </div>
      <div>
        <img
          src={sideBox}
          alt=""
          className=" h-[100%] w-[400px] absolute bottom-0 right-0  "
        />
      </div>
      {
        otpModal?
          <>
            <span className="successPopup modalBackground absolute top-0 left-0 right-0 bottom-0 "></span>
                    
            <div className="bg-white p-6 rounded-lg h-[400px] shadow-lg w-[34%] absolute left-[35%] top-[25vh]">
              <div className="mt-[5%] ">
                <h2 className="text-center text-lg text-black font-semibold">Enter OTP code</h2>
                <p className="text-center  text-gray-600 text-sm mb-4">
                  A 4 digit code has been sent to johndoe@gmail.com
                </p>
              </div>
              <form
                onSubmit={handleOTPSubmit}
                className="flex flex-col  h-50 mt-[5%] items-center text-black  "
              >
                <OtpInput
                  value={otpValue}
                  onChange={setOtpValue}
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
          </>
        :null
      }

      {
        successPopup && ( // Used logical AND to conditionally render success prompt
            <>
                <span onClick={() => setSuccessPopup(!successPopup)} className="successPopup modalBackground absolute top-0 left-0 right-0 bottom-0 "></span>
                <div className="successPopup  bg-white p-6 rounded-lg h-[400px] shadow-lg w-[450px] absolute left-[35%] top-[20%]">
                    <div className="mt-[5%] ">
                    <h2 className="text-center text-black text-lg font-semibold mt-10">Success!</h2>
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
                    <Link to="/set-profile">
                        <Button type="submit" >Setup your Profile</Button>
                    </Link>
                </div>
            </>
        )
      }
    </div>
  );
};

export default Signup;
