import React from "react";
import landingImg from "../assets/landing-img.svg";
import { Product } from "./components/product";
import shoppersImg from "../assets/shoppers.svg";

const LandingPage = () => {
  const productArr = [];
  for (let i = 0; i <= 15; i++) {
    productArr.push(<Product />);
  }

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <div className="">
        <img src={landingImg} alt="" className="lg:-mt-40" />
      </div>
      <div className="flex flex-col mt-10 justify-center items-center w-full">
        <span className="text-[25px] font-black w-full text-start lg:ml-80">
          Products
        </span>
        {/* Product display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row space-x-2 lg:w-[80%]">
          {productArr.map((pro) => (
            <div className="mb-5">{pro}</div>
          ))}
        </div>
      </div>
      <div className="mb-16 mt-12 space-y-10">
        <span className="text-[30px] ml-8">Why Choose Us</span>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row">
          <img src={shoppersImg} alt="" className="w-[90%] lg:w-[50%]" />
          <div className="flex flex-col px-10 lg:w-[40rem]">
            <span className="mb-4 font-semibold pt-4 lg:pt-0">
              Quality You Can Trust
            </span>
            <div className="space-y-10 lg:space-y-28">
              <div>
                At Kings Access, we prioritize quality above all else. Every
                product in our catalog is carefully selected and tested to
                ensure it meets the highest standards.
              </div>
              <div>
                From durable phone cases to high-performance chargers, you can
                trust that our accessories will keep your devices safe and
                functional.
              </div>
              <div className="flex justify-center items-center rounded-lg mt-2 bg-[#39BC3E] w-52 h-10 font-black gap-x-1 ml-3 cursor-pointer">
                Join the team
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
