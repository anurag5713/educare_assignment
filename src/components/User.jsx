import React from "react";
import user from "../assets/Ellipse 114.png";
import camera from "../assets/Group 1585.svg";

const User = () => {
  return (
    <div>
      <div className="text-[#1D2226] h-[68px]  bg-[#FFFFFF] pt-[27px] pl-[15px] text-[18px] font-normal">
        Account Settings
      </div>
      <div className="flex pt-[30px] pl-[20px] gap-x-[20px] ">
        <div className="relative">
          <img src={user} className="w-[76px] h-[76px]" />
          <img src={camera} className="absolute top-12 left-16 " />
        </div>
        <div>
          <p className="text-[19px] font-[600] ">Marry Doe</p>
          <p className="text-[15px] font-medium ">Marry@Gmail.Com</p>
        </div>
      </div>
      <div className="tetx-[#1D2226] text-[14px] font-normal pl-[20px] pr-[20px] pb-[30px] mt-[30px] ">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
      <div className=" border-b-[1px] border-dashed border-[#CBCBCB] "></div>
      <div className=" mt-[450px] border-b-[1px] border-dashed border-[#CBCBCB] "></div>
    </div>
  );
};

export default User;
