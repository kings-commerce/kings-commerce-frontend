// import React, { useEffect, useRef } from "react";
import apple from "../../assets/apple.png";
import jbl from "../../assets/jbl.png";
import logitech from "../../assets/logitech.png"
import anker from "../../assets/anker.png";
import sumsung from "../../assets/sumsung.png";
import microsoft from "../../assets/windows.png"


import React, { useRef, useEffect } from "react";

const LogoBanner = () => {


    const logos = [apple, jbl, anker, logitech, sumsung, jbl, microsoft];


  return (
    <div className="border-t flex flex-row border-b py-2 overflow-hidden relative ">
      <div
        className="flex flex-row animate-scroll space-x-[20%]  "

        // style={{ whiteSpace: "wrap" }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            width={200}
            className="h-8 sm:h-8 md:h-12 lg:h-16 xl:h-22 mx-12"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;

