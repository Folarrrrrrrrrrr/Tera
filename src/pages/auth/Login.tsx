import React from "react";
import { useState } from "react";
import sideBox from "../../assets/images/png/welcomFrame.png";
// import AuthLayout from "../../component/Auth/AuthLayout";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import teraLogo from "../../assets/images/png/teraLogo.png"
import eyeSlash from "../../assets/images/png/eyeslash.png";
import { Link } from "react-router-dom";

const Login = () => {
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
    <div>
      <div className="h-[60%] w-2/4 mt-15 relative left-10 top-[10%]  bg-white p-8 rounded-lg shadow-lg">
        <div className="flex">
         {/* <h2 className="text-2xl text-black font-bold mb-6">Login or Sign</h2> */}
        <img src={teraLogo} alt="" className="relative -top-10  w-20"/>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="relative -top-7">
            <img src={eyeSlash} alt="" className="relative left-145 top-15" />
            <Input
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <p className="relative left-90 -top-10 color-red cursor-pointer">
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
        <Link className=" relative -top-20" to={{ pathname: "/signup" }}>
          <p className="text-center relative top-25 text-black">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Signup</span>
          </p>
        </Link>
      </div>
      <div>
        <img
          src={sideBox}
          alt=""
          className=" h-[100%] w-[500px] bottom-0 absolute right-0  "
        />
      </div>
    </div>
  );
};

export default Login;
