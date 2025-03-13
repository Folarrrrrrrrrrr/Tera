import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sideBox from "../../assets/images/png/welcomFrame.png";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import teraLogo from "../../assets/images/png/teraLogo.png";
import eyeSlash from "../../assets/images/png/eyeslash.png";
import eyeOpen from "../../assets/images/png/vision.png"; // Add an open-eye icon

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulated API call
  };

  return (
    <div className="pl-15 absolute top-0 bottom-0 right-0 left-0 content-center">
      <div className="">
        <img src={teraLogo} alt="" className="h-[6%] w-[6%] absolute top-5" />
        <div className="w-[50%] self-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-black font-bold">Login or Signup</h2>
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
            <div className="relative w-full">
              <Input
                label=""
                placeholder="Enter password"
                type={showPassword ? "text" : "password"} // Toggle type
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <img
                src={showPassword ? eyeOpen : eyeSlash}
                alt="Toggle Password Visibility"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <p className="relative left-[70%] text-red-400 cursor-pointer">
              Forgot password?
            </p>
            <Button className="relative -top-10" type="submit" isLoading={loading}>
              Login
            </Button>
          </form>
        </div>
        <p onClick={() => navigate("/signup")} className="ml-[18%] mt-[2%] text-black">
          Don't have an account? <span className="text-blue-600 cursor-pointer">Signup</span>
        </p>
      </div>
      <div>
        <img
          src={sideBox}
          alt=""
          className="h-[100%] w-[400px] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default Login;
