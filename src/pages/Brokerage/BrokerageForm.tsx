import { useState } from "react";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const BrokerageForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    brokerageName: "",
    mlsCode: "",
    brokerageLicense: "",
    email: "",
    Faxphone: "",
    streetAddress: "",
    country: "",
    zipCode: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("brokerageName", form.brokerageName);
    formData.append("Faxphone", form.Faxphone);
    formData.append("brokerageLicense", form.brokerageLicense);
    formData.append("email", form.email);
    formData.append("country", form.country);
    formData.append("mlsCode", form.mlsCode);
    formData.append("zipCode", form.zipCode);
    formData.append("streetAddress", form.streetAddress);
  
    console.log("Submitting form:", formData);

    setTimeout(() => {
      setLoading(false);
      alert("Profile saved successfully!");
    //   navigate(`/set-signature`);
    setShowSuccess(true)
    }, 2000);
  };

  return (
    <div className="content-center absolute top-0 bottom-0 right-0 left-0">
      <div className="relative left-[25%]">
        <div className="w-[50%] pb-[3px] pt-[2px] self-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-black font-medium text-center mb-0">Fill in the Brokerage Firm Details</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input label="" placeholder="Enter brokerage name" type="text" name="brokerageName" value={form.brokerageName} onChange={handleChange}  required />
            <Input label="" placeholder="Enter MLS code" type="number" name="mlsCode" value={form.mlsCode}   onChange={handleChange} required />
            <Input label="" placeholder="Enter Fax number (optional)" type="number" name="Faxphone" value={form.Faxphone} onChange={handleChange} />
            <Input label="" placeholder="Enter email adress" type="email" name="email" value={form.email} onChange={handleChange} required />
            <Input label="" placeholder="Enter Brokerage License number" type="number" name="brokerageLicense" value={form.brokerageLicense} onChange={handleChange} required />
            <Input label="" placeholder="Enter street address" type="text" name="streetAddress" value={form.streetAddress} onChange={handleChange} required/>
            <Input label="" placeholder="Enter country" type="text" name="country" value={form.country} onChange={handleChange} required/>
            <Input label="" placeholder="Enter zip code" type="number" name="zipCode" value={form.zipCode} onChange={handleChange} required/>

            <Button type="submit" isLoading={loading}>
              Continue
            </Button>
          </form>
        </div>
      </div>
        {/* Success popup starts here  */}
        {showSuccess &&    
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="bg-white w-[350px] p-6 rounded-lg shadow-lg text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">✔</span>
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-lg font-semibold">Brokerage created Successfully</h2>
        <p className="text-gray-500 text-sm mt-2">
          Your Brokerage has been successfully created.
          <br />
          Let’s dive deep with Tera.
        </p>

        {/* CTA Button */}
        <button
          // onClick={onClose}
          onClick={()=>navigate("/brokerageSetup")}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700"
        >
          Go to Dashboard
        </button>
      </div>
      </div>
      }
        
    </div>
    
  );
};

export default BrokerageForm;
