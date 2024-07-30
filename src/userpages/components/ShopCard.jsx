import React from 'react';
import cart from "../../assets/Cart.png";


const ShopCard = ({ imageSrc, altText, label, price }) => {
  return (
    <div className='flex flex-col md:w-[280px] w-full max-w-[400px]  md:mx-2 items-start justify-start'>
      <img src={imageSrc} alt={altText} className='w-full h-auto md:h-[400px] rounded-[30px]' />
      <p className="mt-2 text-start font-bold text-[16px] flex items-start justify-start">{label}</p>
      <p className="mt-2 font-bold text-[16px]">{price}</p>
      <button className="bg-[#39BC3E] text-white font-bold md:w-[260px] w-[220px] h-[60px] rounded-[10px] mt-2">
        <div className='flex flex-row items-center justify-around'>
          <p> Add to cart</p>
          <img src={cart} alt="cart" className='w-[20px] h-[20px] text-white fill-current' />
        </div>
      </button>
    </div>
  );
};

export default ShopCard;
