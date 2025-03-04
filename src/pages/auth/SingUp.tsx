import { useState } from "react";
import AuthLayout from "../../component/Auth/AuthLayout";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import Checkbox from "../../component/UI/Form/Checkbox";
import React from "react";
import { Link } from "react-router-dom";



const Signup = () => {
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
    <AuthLayout>
      <div className="w-full relative -top-15 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Create an account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input label="State" name="state" value={form.state} onChange={handleChange} required />
          <Input label="Real Estate License Number" name="licenseNumber" value={form.licenseNumber} onChange={handleChange} required />
          <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required />
          <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
          <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} required />
          <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
          <Checkbox label="By clicking Sign up, you confirm that you have read, understood, and agreed to our Terms and Conditions and Privacy Policy." required />
          <Button type="submit" isLoading={loading}>Sign up</Button>
        </form>
        
        <Link to={{pathname:"/login"}}>
          <p className="text-center relative top-25">Already have an account? <span className="text-blue-950 cursor-pointer">  Login </span></p>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Signup;
