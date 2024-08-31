import React from "react";

export const StatusCard = ({ title, number, percentageChange, image }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl w-[25rem] h-[200px] border relative">
      <img className="absolute" src={image} alt="" />
      <div className="card-body">
        <div className="absolute right-10 top-5 flex flex-col text-right">
          <span className="font-thin">{title}</span>
          <span className="font-extrabold">{number}</span>
        </div>
        <div className="absolute left-10 bottom-5 text-left">
          <span className="font-bold text-[#39BC3E]">{percentageChange}% </span>
          <span className=""> than yesterday</span>
        </div>
      </div>
    </div>
  );
};
