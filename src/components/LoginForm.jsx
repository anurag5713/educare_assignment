import React, { useState } from 'react'

const LoginForm = () => {
    const [formData, setFormData]=useState({
        email:"",
        password:"",
    })
    const{email,password}=formData
    const handleOnChange=(e)=>{
      setFormData((prevData)=>({
        ...prevData,
        [e.target.name]:e.target.value,
      }))
    }
  return (
    <div className='pt-[40px] pl-[20px] pr-[20px] '>
        <p className='font-[700] text-[36px] '>Signin to your PopX account</p>
        <p className='text-[18px] font-normal opacity-[0.6] ' >Lorem ipsum dolor sit amet, 
        <br/>consectetur adipiscing elit,</p>
        <form className='mt-[28px]'>
        <label className='relative '>
            <p className="mb-4 text-[0.875rem] text-[#6C25FF] font-[500] absolute -top-5 left-3 bg-[#F7F8F9] pl-1 pr-4">
            Email Address
            </p>
            <input className='w-[335px] h-[40px] rounded-[6px] border-[1px] border-solid 
            border-[#CBCBCB]  bg-[#F7F8F9] text-[13px] p-[12px] mb-6'
              required
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Email Address"
            />
          </label>

          <label className='realtive'>
            <p className="mb-1 text-[0.875rem]  text-[#6C25FF] absolute top-[282px] left-8 bg-[#F7F8F9] pl-1 pr-10">
            Password
            </p>
            <input className='w-[335px] h-[40px] rounded-[6px] border-[1px] border-solid 
            border-[#CBCBCB] bg-[#F7F8F9] text-[13px] p-[12px]  '
              required
              type="text"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
            />
          </label>
          <br/>
          <button type='submit' className='w-[335px] h-[40px] 
            bg-[#CBCBCB] text-[16px] rounded-[6px] mt-[20px] text-[#FFFFFF] '>Login
 
            </button>

        </form>
    </div>
  )
}

export default LoginForm