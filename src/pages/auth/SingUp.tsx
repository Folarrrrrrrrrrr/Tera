import { useState } from "react";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import Checkbox from "../../component/UI/Form/Checkbox";
import React from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
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
    <div>
      <div className="h-[60%] w-2/4 relative left-10 top-[10%] bg-white p-8 rounded-lg shadow-lg">
        <div className="flex relative top-5">
          {/* <h2 className="text-2xl text-black font-bold mb-6">Login or Sign</h2> */}
          <img src={teraLogo} alt="" className="relative -top-10  w-20" />
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label=""
            placeholder="Enter your state"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          />
          <Input
            label=""
            placeholder="Real Estate License Number"
            name="licenseNumber"
            value={form.licenseNumber}
            onChange={handleChange}
            required
          />
          <Input
            label=""
            placeholder="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <Input
            label=""
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {/* <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} required /> */}
          <PhoneInput
            country={"us"} // Set default country
            value={phone}
            onChange={(value) => setPhone(value)}
            enableSearch={true} // Enables country search
            inputClass="!w-full !px-4 text-black !py-2 !border !border-gray-300 !rounded-lg !pl-14 !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:border-blue-500"
            containerClass="w-full"
            buttonClass="!bg-transparent !border-none"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Checkbox
            className="bg-white"
            label="By clicking Sign up, you confirm that you have read, understood, and agreed to our Terms and Conditions and Privacy Policy."
            required
          />
          <Button type="submit" isLoading={loading}>
            Sign up
          </Button>
        </form>

        <p
          onClick={() => navigate("/login")}
          className="text-center relative top-2 cursor-pointer"
        >
          Already have an account?{" "}
          <span className="text-blue-950 cursor-pointer"> Login </span>
        </p>

        {/* </div> */}
      </div>
      <div>
        <img
          src={sideBox}
          alt=""
          className=" h-[100vh] w-[400px] bottom-0 absolute right-0"
        />
      </div>
    </div>
  );
};

export default Signup;
