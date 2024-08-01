import * as React from "react";
import {
  LandingSwipeableTextMobileStepper,
  SwipeableTextMobileStepperOne,
  SwipeableTextMobileStepperComponent,
  PrimeReactProductCarousel,
  ReviewCarousel,
} from "./components/carousels";
import { ShopOneProduct, ProductCategory } from "./components/product";
import {
  landingCarouselimgdata,
  ProductService,
  productData,
  swiperTwoData,
  categoryData,
  reviews,
} from "./components/data";
import deliverBox from "../assets/delivery-box.svg";
import sumsungLogo from "../assets/samsung-logo.svg";
import appleLogo from "../assets/apple-logo.svg";
import ankaLogo from "../assets/anka-logo.svg";
import ublLogo from "../assets/ubl-logo.svg";
import logitechLogo from "../assets/logitech-logo.svg";

function ShopOne() {
  const dataArr = productData.filter((data) => data.isLarge);
  const logos = [sumsungLogo, appleLogo, ankaLogo, ublLogo, logitechLogo];
  return (
    <div className="container w-full overflow-hidden">
      <LandingSwipeableTextMobileStepper data={landingCarouselimgdata} />
      <div className="mt-10 w-full">
        <PrimeReactProductCarousel ProductService={ProductService} />
      </div>
      <div className="text-[#127816] flex flex-col md:flex-row lg:flex-row justify-center items-center md:px-14 lg:px-14 py-5 px-2 w-[100%]">
        <span className="font-bold text-[20px] md:mr-80 lg:mr-80">
          Popular Products
        </span>
        <div className="grid grid-cols-3 grid-row-2 md:flex lg:flex md:flex-row lg:flex-row justify-around md:w-[40%] lg:w-[40%] w-full">
          {[
            "Headsets",
            "Keyboards",
            "Chargers",
            "Wireless mouse",
            "Pendrives",
          ].map((product) => {
            return (
              <span className="flex items-center border border-gray-300 rounded-2xl h-10 w-full mx-3 px-3">
                {product}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-start space-x-4 px-32 mt-10">
        {productData.map((product) => {
          return (
            <div className="mb-10">
              <ShopOneProduct data={product} largeIsRequired={false} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center w-full">
        <SwipeableTextMobileStepperOne data={swiperTwoData} />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-around w-full mt-20 md:px-64 lg:px-64">
        <div className="w-[450px] h-[500px] border mx-3 md:px-0 lg:px-0 md:pl-20 lg:pl-20">
          <SwipeableTextMobileStepperComponent data={dataArr} />
        </div>
        <div>
          {categoryData.map((product, index) => {
            return (
              <div className="mb-10" key={index}>
                <ProductCategory data={product} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around md:items-center lg:items-center mx-2 w-[400px] md:w-auto lg:w-auto md:mx-40 lg:mx-40 text-[#127816] md:bg-[#B0E4B2] lg:bg-[#B0E4B2] lg:h-[150px] md:h-[150px] rounded-xl">
        <div className="flex flex-row justify-center items-center bg-[#B0E4B2] h-[130px] md:h-auto lg:h-auto rounded-lg">
          <img src={deliverBox} alt="" />
          <div className="flex flex-col w-full md:w-[50%] lg:w-[50%]">
            <span className="font-extrabold">Delivery at a fee</span>
            <span>
              Reliable delivery available for a nominal fee to every corner of
              Legon, ensuring your purchases reach you quickly and safely.
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center bg-[#B0E4B2] mt-3 md:mt-0 lg:mt-0 h-[130px] md:h-auto lg:h-auto rounded-lg">
          <img src={deliverBox} alt="" />
          <div className="flex flex-col w-full md:w-[50%] lg:w-[50%]">
            <span className="font-extrabold">Best quality</span>
            <span>
              Experience the best quality at unbeatable prices, offering
              incredible value for every purchase.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full mt-16">
        <span className="text-[#127816] text-[20px] font-extrabold w-[40%] flex justify-center my-4">
          Reviews
        </span>
        <div>
          <ReviewCarousel reviews={reviews} />
        </div>
      </div>
      <div className="my-10">
        <span className="text-[#127816] text-[20px] font-extrabold w-[40%] flex justify-center my-4">
          Popular Brands
        </span>
        <div className="overflow-hidden relative border border-t-[#127816] border-b-[#127816] shadow-[#B0E4B2] shadow-md py-4">
          <div className="flex animate-scroll space-x-10 md:space-x-40 lg:space-x-40">
            {[
              sumsungLogo,
              appleLogo,
              ankaLogo,
              ublLogo,
              logitechLogo,
              sumsungLogo,
              appleLogo,
              ankaLogo,
              ublLogo,
              logitechLogo,
            ].map((logo, index) => (
              <img src={logo} alt="" className="h-16" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopOne;
