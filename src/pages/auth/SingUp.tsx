import { useState } from "react";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import Checkbox from "../../component/UI/Form/Checkbox";
import React from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import eyeSlash from "../../assets/images/png/eyeslash.png";
import "react-phone-input-2/lib/style.css";
import sideBox from "../../assets/images/png/welcomFrame.png";
import teraLogo from "../../assets/images/png/teraLogo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [form, setForm] = useState({
    state: "",
    licenseNumber: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulated API call
    navigate(`/otpModal`);
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
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              label=""
              placeholder="Enter License number"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              label=""
              placeholder="Enter full name"
              type="email"
              name="email"
              value={form.email}
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
            <PhoneInput
            country={"us"} 
            value={phone}
            placeholder="XX XXX ....."
            onChange={(value) => setPhone(value)}
            enableSearch={true} 
            inputClass="!w-full !px-4 text-black !py-2 !border !border-gray-300 !rounded-lg !pl-14 !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:border-blue-500"
            containerClass="w-3/4"
            buttonClass="!bg-transparent !border-none"
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
    </div>
  );
};

export default Signup;
