import { Route, Router, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import User from "./components/User";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[812px] font-rubik mx-auto ">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
