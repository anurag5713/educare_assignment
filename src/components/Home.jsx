import React from "react";
import Nav from "./Nav";
const Home = () => {
  return (
    <div className="pt-[544px]  pb-[50px] pl-[20px] ">
      <Nav/>
      <div className="mb-[29px]">
        <p className="text-[#1D2226] font-[800] text-[28px]">Welcome to PopX</p>
        <p className="text-[#1D2226] font-normal text-[18px] opacity-[0.6] ">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
      </div>
      <div className="flex flex-col">
        <div>
          <button className="bg-[#6C25FF] rounded-[6px] text-[#FFFFFF] text-[16px] font-normal font-rubik flex items-center justify-center w-[335px] h-[46px] mb-[15px]">
            Create Account
          </button>
        </div>
        <div>
          <button className="bg-[#6C25FF4B] rounded-[6px] text-[#1D2226] text-[16px] font-normal font-rubik flex items-center justify-center w-[335px] h-[46px] ">
            Already Registerd? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
