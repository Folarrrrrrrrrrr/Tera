import { useState } from "react";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";

const SetProfile = () => {
  const navigate = useNavigate();

  // const [phone, setPhone] = useState("");
  const [form, setForm] = useState({
    state: "",
    licenseNumber: "",
    LicenseeName: "",
    email: "",
    phone: "",
    Faxphone: "",
    profilePhoto: "",
    membership:""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulated API call
    console.log(form);
    
    navigate(`/otpModal`);
  };

  return (
    <div className="  content-center absolute top-0 bottom-0 right-0 left-0 ">
      <div className="relative left-[25%]">
       <div className="w-[50%] pb-[3px] pt-[2px] self-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-black font-medium  text-center mb-0">Create your Tera-file</h2>
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
              placeholder="Real Estate License number"
              type="text"
              name="licenseNumber"
              value={form.licenseNumber}
              onChange={handleChange}
              required
            />
            <Input
              label=""
              placeholder="Licensee's Name"
              type="text"
              name="LicenseeName"
              value={form.LicenseeName}
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
              placeholder="Fax number(optional)"
              type="number"
              name="Faxphone"
              value={form.Faxphone}
              onChange={handleChange}
              />

           <Input
              label=""
              placeholder="Enter realtor membership"
              type="number"
              name="membership"
              value={form.membership}
              onChange={handleChange}
            />
           <Input
              label=""
            //   placeholder="Add profile photo"
              type= "file"
              name="profilePhoto"
              value={form.profilePhoto}
              onChange={handleChange}
            />
            
            <Button type="submit" isLoading={loading}>
                Continue
            </Button>
          </form>
        </div>
        
      </div>
     <div></div>
    </div>
  );
};

export default SetProfile;
