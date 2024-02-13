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
    <div className="pt-[40px] pl-[20px] pr-[20px] ">
      <div className="text-[36px] font-rubik font-[600] ">
        Create your
        <br /> PopX account
      </div>
      <form onSubmit={handleOnSubmit} className="flex flex-col pt-8">
        <label className="realtive mb-8">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#6C25FF] absolute top-[170px] left-[600px] bg-[#F7F8F9] pl-1 pr-4 ">
            Full Name
            <sup className="text-[#DD4A3D] w-[6px] h-[15px]">*</sup>
          </p>
          <input
            required
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] placeholder-black p-[12px] border-[1px] border-[#CBCBCB] border-solid "
          />
        </label>

        <label className="relative mb-8">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#6C25FF] absolute -top-3 left-2 bg-[#F7F8F9] pl-1  ">
            Phone number<sup className="text-[#DD4A3D] w-[6px] h-[15px]">*</sup>
          </p>
          <input
            required
            type="text"
            name="phone"
            value={phone}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] p-[12px] border-[1px] border-[#CBCBCB] border-solid placeholder-black "
          />
        </label>
        <label className="relative mb-8">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#6C25FF] absolute -top-3 left-2 bg-[#F7F8F9] pl-1  ">
            Email address
            <sup className="text-[#DD4A3D] w-[6px] h-[15px]">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] p-[12px] border-[1px] border-[#CBCBCB] border-solid  placeholder-black "
          />
        </label>

        <label className="relative mb-8">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#6C25FF] absolute -top-3 left-2 bg-[#F7F8F9] pl-1 pr-6 ">
            Password<sup className="text-[#DD4A3D] w-[6px] h-[15px]">*</sup>
          </p>
          <input
            required
            type="text"
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] p-[12px] border-[1px] border-[#CBCBCB] border-solid  placeholder-black"
          />
        </label>
        <label className="relative mb-8">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#6C25FF] absolute -top-3 left-2 bg-[#F7F8F9] pl-1 ">
            Company name
          </p>
          <input
            required
            type="text"
            name="company"
            value={company}
            onChange={handleOnChange}
            placeholder="Marry Doe"
            className="w-full rounded-[0.38rem] bg-[#F7F8F9] p-[12px] border-[1px] border-[#CBCBCB] border-solid  placeholder-black "
          />
        </label>
        <div>
          <p className="mb-2">
            Are you an Agency?
            <span className="text-[#DD4A3D] w-[6px] h-[15px]">*</span>
          </p>

         <div className="flex gap-x-4">
          <label className="flex justify-center gap-x-2"> 
          <input
            type="radio"
            name="agency"
            value="yes"
            checked
            onChange={handleOnChange}
            className="h-[22px] w-[22px] text-[#6C25FF] "
          />
          <span>Yes</span>
          </label>

          
          <label className="flex justify-center gap-x-2" >
            <input
            type="radio"
            name="agency"
            value="no"
            onChange={handleOnChange}
            className="h-[22px] w-[22px] "
          />
          <span>No</span>
          </label>
          </div>


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
