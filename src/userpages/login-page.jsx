import React from "react";
import googleIcon from "../assets/google-icon.svg";
import loginImg from "../assets/login-img.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="lg:h-screen flex justify-center items-center">
      <div className="flex flex-row justify-between items-start bg-white w-full lg:w-[70%] lg:rounded-tl-[100px] lg:rounded-bl-[100px] h-[80%] shadow-md shadow-[#39BC3E] pl-36">
        <div className="flex justify-center h-full">
          <img src={loginImg} alt="" className="w-[300px]" />
        </div>
        <div className="w-[50%] px-10 mt-20 space-y-4">
          <span className="flex justify-center text-[25px] w-[100%] font-extrabold text-center">
            Login
          </span>
          <div className="flex flex-row border w-full justify-center items-center px-2 h-12 space-x-2">
            <img src={googleIcon} alt="" className="w-7" />
            <span>Login with Google</span>
          </div>
          <span className="flex flex-row items-center">
            <hr className="w-full h-[2px] bg-gray-900" />{" "}
            <span className="mx-1">OR</span>
            <hr className="w-full h-[2px] bg-gray-900" />
          </span>
          <div className="flex flex-col space-y-8">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="password" />
            </label>
            <button className="btn bg-[#39BC3E] text-white w-full">
              Login
            </button>
            <div>
              Don't have an account?
              <Link to={"/signup"}>
                <span className="text-[#0000EE]">Sign up</span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
