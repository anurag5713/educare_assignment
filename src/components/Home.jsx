import React from 'react'

const Home = () => {
  return (
    <div className='pt-[544px] pl-[20px] '>
    <div>
        <p className='text-[#1D2226] font-[800] text-[28px]'>Welcome to PopX</p>
        <p className='text-[#1D2226] font-normal text-[18px] opacity-[0.6] '>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit,</p>
    </div>
    <div>
        <button className='bg-[#6C25FF] rounded-[6px] text-[#FFFFFF] text-[16px] font-normal font-rubik flex items-center justify-center w-[335px] h-[46px] '>Create Account</button>
        <br/>
        <button className='bg-[#6C25FF4B] rounded-[6px] text-[#1D2226] text-[16px] font-normal font-rubik flex items-center justify-center w-[335px] h-[46px] ' >Already Registerd? Login</button>
    </div>
       
    </div>
  )
}

export default Home