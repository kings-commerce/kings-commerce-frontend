import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import aboutUs from "../../assets/aboutus-img.svg";
import cart from "../../assets/cart-img.svg";
import contact from "../../assets/contact-img.svg";
import home from "../../assets/home-img.svg";
import profile from "../../assets/profile-img.svg";
import search from "../../assets/search-img.svg";
import shop from "../../assets/shop-img.svg";

const Navbar = () => {
  const navbarItems = [
    {
      icon: home,
      text: "Home",
      link: "/landing",
    },
    {
      icon: aboutUs,
      text: "About Us,",
    },
    {
      icon: shop,
      text: "Shop",
    },
    {
      icon: contact,
      text: "Contact",
    },
    {
      icon: search,
      text: "Search",
    },
    {
      icon: cart,
      text: "Cart",
    },
    {
      icon: profile,
      text: "Profile",
    },
  ];
  return (
    // <nav className="flex flex-row justify-between px-8">
    //   <div className="flex flex-row justify-center items-center">
    //     <img src={logo} alt="" />
    //     <span className="font-extrabold">Kings Access</span>
    //   </div>
    //   <div className="flex flex-row w-[70%] justify-around">
    //     {navbarItems.map((item) => {
    //       return (
    //         <li>
    //           <Link
    //             to={"landing"}
    //             className="flex flex-col justify-center items-center"
    //           >
    //             <img src={item.icon} className="w-7" />
    //             {item.text}
    //           </Link>
    //         </li>
    //       );
    //     })}
    //   </div>
    // </nav>
    <div className="drawer bg-white">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full lg:flex flex-row lg:justify-between bg-white">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img src={logo} alt="" className="w-10" />
            <span className="font-black text-[25px]">Kings Access</span>
          </div>
          <div className="hidden flex-none lg:block w-[70%]">
            <ul className="menu menu-horizontal flex justify-around">
              {/* Navbar menu content here */}
              {navbarItems.map((item) => {
                return (
                  <li>
                    <Link
                      to={"landing"}
                      className="flex flex-col justify-center items-center"
                    >
                      <img src={item.icon} className="w-7" />
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {navbarItems.map((item) => {
            return (
              <li>
                <Link to={"landing"} className="flex flex-row">
                  <img src={item.icon} className="w-10" />
                  <span className="text-32 font-bold">{item.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
