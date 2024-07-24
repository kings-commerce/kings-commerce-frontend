import React from "react";
import girltoon from "../assets/girl-toon.svg";

const ContactUs = () => {
  return (
    <div className="flex flex-row">
      <img src={girltoon} alt="" />
      <div>
        <span className="flex justify-center text-[25px] w-[100%] font-extrabold text-center">
          Create Account
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
