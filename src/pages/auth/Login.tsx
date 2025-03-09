import React from "react";
import { useState } from "react";
import sideBox from "../../assets/images/png/welcomFrame.png";
// import AuthLayout from "../../component/Auth/AuthLayout";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import teraLogo from "../../assets/images/png/teraLogo.png";
import eyeSlash from "../../assets/images/png/eyeslash.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
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
  };

  return (
    <div className="pl-15 absolute top-0 bottom-0 right-0 left-0  content-center">
      <div className="">
        <img src={teraLogo} alt="" className="h-[6%] w-[6%] absolute top-5" />
        <div className="w-[50%] self-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-black font-bold ">Login or Signup</h2>
          <form className="space-y-4 mt-[5%]" onSubmit={handleSubmit}>
            <Input
              label=""
              placeholder="Enter your email"
              type="email"
              name="email"
              value={form.email}
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
            <p className="relative left-[80%]  text-red-400 cursor-pointer">
              forgot password?{" "}
            </p>
            <Button
              className="relative -top-10"
              type="submit"
              isLoading={loading}
            >
              Login
            </Button>
          </form>
        </div>
          <p onClick={()=> navigate("/signup")} className="ml-[18%] mt-[2%] text-black">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Signup</span>
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

export default Login;
