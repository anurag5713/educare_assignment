import React from "react";
import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    company: "",
    email: "",
    agency: "yes",
  });
  const { fullName, phone, email, password, company } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    setFormData({
      fullName: "",
      phone: "",
      password: "",
      company: "",
      email: "",
    });
  };
  return (
    <div className="pt-[40px] pl-[20px] ">
      <div className="text-[36px] font-rubik font-[600] " >Create your
      <br/> PopX account</div>
      <form onSubmit={handleOnSubmit} className="flex flex-col pt-8">
        <label className="realtive mb-8">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#6C25FF] absolute top-[170px] left-8 bg-[#F7F8F9] pl-1 pr-4 ">
            Full Name
            <sup className="text-[#DD4A3D] w-[6px] h-[15px] p-0 ">*</sup>
          </p>
          <input
            required
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] text-black p-[12px] border-[1px] border-[#CBCBCB] border-solid "
          />
        </label>
      

        <label className="relative mb-8">
          <p className="absolute -top-3 left-2 bg-[#F7F8F9] pl-1 pr-4 ">
            Phone number<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="phone"
            value={phone}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] p-[12px] border-[1px] border-[#CBCBCB] border-solid "
          />
        </label>
        <label className="relative mb-8">
          <p className="absolute -top-3 left-2 bg-[#F7F8F9] pl-1 pr-4 ">
            Email address<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] p-[12px] border-[1px] border-[#CBCBCB] border-solid "
          />
        </label>

        <label className="relative mb-8">
          <p className="absolute -top-3 left-2 bg-[#F7F8F9] pl-1 pr-4 ">
            Password<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] p-[12px] border-[1px] border-[#CBCBCB] border-solid "
          />
        </label>
        <label className="relative mb-8">
          <p className="absolute -top-3 left-2 bg-[#F7F8F9] pl-1 pr-4">
            Company name
          </p>
          <input
            required
            type="text"
            name="company"
            value={company}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] p-[12px] border-[1px] border-[#CBCBCB] border-solid "
          />
        </label>
        <div>
          <p>
            Are you an Agency?<span>*</span>
          </p>

          <input
            type="radio"
            name="agency"
            value="yes"
            onChange={handleOnChange}
          />

          <label htmlFor="agency">Yes</label>
          <input
            type="radio"
            name="agency"
            value="no"
            onChange={handleOnChange}
          />

          <label htmlFor="pushEverything">No</label>
        </div>

        <button
          className=" mt-6 font-richblack-900 bg-yellow-50 rounded-[8px] font-medium  py-[8px]"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
