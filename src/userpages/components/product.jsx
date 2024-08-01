import React from "react";
import headsetImg from "../../assets/headset.svg";

//images
import star from "../../assets/start.svg";
import addCart from "../../assets/add-cart.svg";
import favorite from "../../assets/favorite.svg";

const Product = () => {
  return (
    <div className="flex flex-col max-w-64 px-1">
      <img src={headsetImg} alt="" className="w-full rounded-lg" />
      <span className="font-bold md:pl-3">
        Elegant Timepieces for Every Occasion
      </span>
      <span className="font-bold md:pl-3">Price: GH₵199.99</span>
      <button className="btn flex justify-center items-center rounded-lg mt-2 bg-[#39BC3E] w-48 lg:w-full h-10 font-black gap-x-1 lg:ml-3 cursor-pointer">
        Add to Cart
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
      </button>
    </div>
  );
};

const ShopOneProduct = ({ data, largeIsRequired }) => {
  const stars = [];
  for (let i = 1; i <= data.numberOfStars; i++) {
    stars.push(star);
  }

  return (
    <div
      className={`flex flex-col justify-between ${
        data.isLarge && largeIsRequired
          ? "w-[350px]"
          : "w-[280px] hover:border hover:shadow-lg"
      } rounded-2xl pb-3 h-[400px]`}
    >
      <div className="relative">
        <img
          src={data.image}
          alt=""
          className="border rounded-2xl h-[200px] w-full"
        />
        <img
          src={favorite}
          alt=""
          className="absolute top-2 right-2 w-7 rounded-full transition duration-300 hover:bg-[#E9AF4C]"
        />
      </div>
      <div
        className={`flex ${
          data.isLarge && largeIsRequired
            ? "flex-row justify-between"
            : "flex-col"
        } px-2`}
      >
        <div>
          <span>{data.name}</span>
          <div className="flex flex-row my-1">
            {stars.map((star, index) => (
              <img key={index} src={star} alt="" />
            ))}
            <span className="ml-2 text-gray-400"> {data.numSold}+ sold</span>
          </div>
          <div>
            <span>GH₵{data.price}</span>
            <span className="line-through text-gray-400 ml-2">
              GH₵{data.strikedPrice}
            </span>
          </div>
        </div>
        <div>
          <button className="btn bg-[#39BC3E] text-white w-full rounded-lg h-10 mt-1 flex flex-row justify-center items-center">
            Add to cart <img src={addCart} alt="" className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductCategory = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={data.image} alt="" className="rounded-full w-[250px] mb-3" />
      <span className="font-extrabold">{data.name}</span>
    </div>
  );
};

export { Product, ShopOneProduct, ProductCategory };
