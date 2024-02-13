import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="text-[14px] text-black font-normal flex flex-col ">
      <p>To navigate to pages </p>
      <div className="flex gap-x-2">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/user">User</Link>
      </div>
    </div>
  );
};

export default Nav;
