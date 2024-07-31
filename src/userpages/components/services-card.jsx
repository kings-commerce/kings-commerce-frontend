import React from "react";

function Card({ img, title, desc }) {
  return (
    <div
      className={` flex flex-col xs:flex-col   ${
        title === "Phone accessories" ? "sm:flex-row-reverse" : "sm:flex-row"
      } justify-between gap-5 my-12 border-[#E9AF4C] border-[1px] p-8`}
    >
      <div className="">
        <img src={img} alt={title} width={1800} />
      </div>
      <div className="font-montserrat flex flex-col justify-evenly items-center gap-2">
        <span className="w-full text-center text-primary-400 font-bold text-2xl italic">
          {title}
        </span>
        <p
          dangerouslySetInnerHTML={{ __html: desc.replace(/\n/g, "<br />") }}
        />
      </div>
    </div>
  );
}

export default Card;
