import React from "react";
import Table from "./components/checkoutTable";
import { IoArrowBackCircle } from "react-icons/io5";

const Checkout = () => {
  return (
    <div className="">
      <div className="mx-[100px] mt-[90px] mb-[80px]"></div>

      <div className="flex md:flex-row flex-col md:items-start items-center justify-around px-[100px] mb-20 space-y-20 ">
        <div>
          <p className="text-[40px] font-bold text-black mb-[70px]">
            Shopping Cart
          </p>
          <Table />
          <button className="w-[200px] h-[40px] mx-5 border border-black rounded-3xl text-black flex items-center justify-center">
            <IoArrowBackCircle className="mr-2" />
            Continue shopping
          </button>
        </div>
        <div className="w-[300px] h-[600px] rounded-xl bg-[#127816] flex flex-col py-8">
          <p className="text-[28px] text-white font-bold flex justify-center">
            Payment info
          </p>
          <div className="border-b my-6 border-gray-300 mx-3"></div>
          <div className="flex flex-col space-y-3 justify-start">
            <p className="text-[14px] font-medium mb-4 px-9 text-white">
              Payment method
            </p>
            <button className="w-[160px] h-[40px] mx-5 border border-white rounded-3xl text-white">
              Mobile money
            </button>
            <p className="text-[14px] font-medium px-9 text-white">MTN</p>
            <p className="text-[14px] font-medium px-9 text-white">Tele cash</p>
            <p className="text-[14px] font-medium px-9 text-white">AT money</p>
          </div>
          <div className="border-b my-6 border-gray-300 mx-3"></div>
          <button className="w-[200px] h-[40px] mx-5 border border-white rounded-3xl text-white">
            Payment on delivery
          </button>
          <button className="w-[250px] h-[50px] mx-5 mt-[100px] bg-white text-[#127816] rounded-3xl">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
