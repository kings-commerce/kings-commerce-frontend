import React from "react";
import headsetImg from "../../assets/headset.svg";

const Product = () => {
  return (
    <div className="flex flex-col max-w-64 px-1">
      <img src={headsetImg} alt="" className="w-full rounded-lg" />
      <span className="font-bold md:pl-3">
        Elegant Timepieces for Every Occasion
      </span>
      <span className="font-bold md:pl-3">Price: $199.99</span>
      <div className="flex justify-center items-center rounded-lg mt-2 bg-[#F5C30F] w-48 lg:w-52 h-10 font-black gap-x-1 lg:ml-3 cursor-pointer">
        SHOP NOW
        <svg
          width="15"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9142 4.19129C22.0199 3.36963 21.4394 2.61789 20.6178 2.51225L7.228 0.790671C6.40633 0.685026 5.6546 1.26547 5.54896 2.08714C5.44331 2.9088 6.02376 3.66053 6.84542 3.76618L18.7474 5.29647L17.2172 17.1985C17.1115 18.0202 17.692 18.7719 18.5136 18.8775C19.3353 18.9832 20.087 18.4027 20.1927 17.5811L21.9142 4.19129ZM1.91674 20.1874L21.3432 5.18726L19.5097 2.81274L0.0832596 17.8129L1.91674 20.1874Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Product;
