import { useState, useEffect } from "react";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Form/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const SetProfile = () => {
  const navigate = useNavigate();

  const [passedData, setPassedData] = useState({
    state: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setPassedData(JSON.parse(storedData));
    }
  }, []);

  const [form, setForm] = useState({
    state: passedData.state,
    licenseNumber: "",
    LicenseeName: "",
    email: passedData.email,
    phone: passedData.phone,
    Faxphone: "",
    profilePhoto: null as File | null, // Updated to handle files
    membership: "",
  });

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null); // Preview image URL

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "file" && e.target.files) {
      const file = e.target.files[0];
      setForm({ ...form, profilePhoto: file });
      setPreview(URL.createObjectURL(file)); // Generate preview URL
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("state", form.state);
    formData.append("licenseNumber", form.licenseNumber);
    formData.append("LicenseeName", form.LicenseeName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("Faxphone", form.Faxphone);
    formData.append("membership", form.membership);
    if (form.profilePhoto) {
      formData.append("profilePhoto", form.profilePhoto);
    }

    console.log("Submitting form:", formData);

    setTimeout(() => {
      setLoading(false);
      alert("Profile saved successfully!");
      navigate(`/set-signature`);
    }, 2000);
  };

  return (
    <div className="content-center absolute top-0 bottom-0 right-0 left-0">
      <div className="relative left-[25%]">
        <div className="w-[50%] pb-[3px] pt-[2px] self-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-black font-medium text-center mb-0">Create your Tera-file</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input label="" placeholder="Enter your state" type="text" name="state" value={passedData.state} readOnly required />
            <Input label="" placeholder="Enter your email" type="email" name="email" value={passedData.email} readOnly required />
            <Input label="" placeholder="Enter phone number" type="number" name="phone" value={passedData.phone} readOnly required />
            <Input label="" placeholder="Real Estate License number" type="text" name="licenseNumber" value={form.licenseNumber} onChange={handleChange} required />
            <Input label="" placeholder="Licensee's Name" type="text" name="LicenseeName" value={form.LicenseeName} onChange={handleChange} required />
            <Input label="" placeholder="Fax number (optional)" type="number" name="Faxphone" value={form.Faxphone} onChange={handleChange} />
            <Input label="" placeholder="Enter realtor membership" type="number" name="membership" value={form.membership} onChange={handleChange} />

            {/* Profile Photo Upload */}
            <div>
              <label className="block text-gray-700 font-semibold">Profile Photo</label>
              <div className="relative flex items-center border rounded-lg p-3 cursor-pointer">
                {preview ? (
                  <img src={preview} alt="Profile Preview" className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <span className="text-gray-400">📷 Add profile photo</span>
                )}
                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleChange} />
              </div>
            </div>

            <Button type="submit" isLoading={loading}>
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetProfile;
