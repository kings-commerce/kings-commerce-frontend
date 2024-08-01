import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import aboutUs from "../../assets/aboutus-img.svg";
import cart from "../../assets/cart-img.svg";
import signinImg from "../../assets/signin-img.svg";
import signupImg from "../../assets/signup-img.svg";
import contact from "../../assets/contact-img.svg";
import home from "../../assets/home-img.svg";
import profile from "../../assets/profile-img.svg";
import search from "../../assets/search-img.svg";
import shop from "../../assets/shop-img.svg";
import Signup from "../signup-page";

const Navbar = () => {
  const navbarItems = [
    {
      icon: signinImg,
      text: "Sign In",
      link: "/signin",
    },
    {
      icon: signupImg,
      text: "Sign Up",
      link: "/signup",
    },
    {
      icon: cart,
      text: "Cart",
      link: "/checkout",
    },
  ];

  const navbarItemsTwo = [
    {
      text: "Home",
      link: "/landing",
    },
    {
      icon: aboutUs,
      text: "About Us",
      link: "/about",
    },
    {
      icon: contact,
      text: "Contact US",
      link: "/contact-us",
    },
    {
      icon: shop,
      text: "Store",
      link: "/shop",
    },
  ];

  const mobileSideBarItems = [
    {
      icon: home,
      text: "Home",
      link: "/landing",
    },
    {
      icon: signinImg,
      text: "Sign In",
      link: "/signin",
    },
    {
      icon: signupImg,
      text: "Sign Up",
      link: "/signup",
    },
    {
      icon: search,
      text: "Search",
      link: "",
    },
    {
      icon: cart,
      text: "Cart",
      link: "/checkout",
    },

    {
      icon: aboutUs,
      text: "About Us",
      link: "/about",
    },
    {
      icon: shop,
      text: "Shop",
      link: "/shop",
    },
    {
      icon: contact,
      text: "Contact",
      link: "/contact-us",
    },
    {
      icon: profile,
      text: "Profile",
      link: "",
    },
  ];

  return (
    <div className="drawer bg-white z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full lg:flex md:flex flex-col lg:justify-between bg-[#39BC3E]">
          <div className="flex-none lg:hidden w-full">
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row justify-center items-center">
                <img src={logo} alt="" className="w-10" />
                <span className="flex flex-col font-black text-[12px]">
                  <span>KINGS</span>
                  <span>ACCESSORIES</span>
                </span>
              </div>
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
              <div className="hidden flex-none lg:block w-[60%]">
                <ul className="menu menu-horizontal flex justify-between items-center">
                  <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="" placeholder="Search" />
                    <button className="btn bg-[#E9AF4C] text-white h-[110%] w-32 rounded-[15px] z-50 -mr-10">
                      Search
                    </button>
                  </label>
                  {/* Navbar menu content here */}
                  <div className="flex flex-row justify-between w-[40%]">
                    {navbarItems.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="flex flex-row justify-center items-center"
                          >
                            <span className="relative w-10">
                              <img src={item.icon} className="w-7" />
                              {item.text === "Cart" ? (
                                <span className="bg-[#E9AF4C] absolute top-0 right-0 rounded-full w-4 h-4 flex items-center justify-center">
                                  0
                                </span>
                              ) : null}
                            </span>
                            {item.text}
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full justify-between hidden lg:flex flex-row px-5">
            <div className="flex flex-row justify-center items-center">
              <img src={logo} alt="" className="w-10" />
              <span className="flex flex-col font-black text-[12px]">
                <span>KINGS</span>
                <span>ACCESSORIES</span>
              </span>
            </div>
            <div className="hidden flex-none lg:block w-[60%]">
              <ul className="menu menu-horizontal flex justify-between items-center">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="" placeholder="Search" />
                  <button className="bg-[#E9AF4C] text-white h-[110%] w-32 rounded-[15px] z-50 -mr-10">
                    Search
                  </button>
                </label>
                {/* Navbar menu content here */}
                <div className="flex flex-row justify-between w-[40%]">
                  {navbarItems.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={item.link}
                          className="flex flex-row justify-center items-center"
                        >
                          <span className="relative w-10">
                            <img src={item.icon} className="w-7" />
                            {item.text === "Cart" ? (
                              <span className="bg-[#E9AF4C] absolute top-0 right-0 rounded-full w-4 h-4 flex items-center justify-center">
                                0
                              </span>
                            ) : null}
                          </span>
                          {item.text}
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* Second bar */}
        <div className="lg:flex hidden flex-row list-none justify-center items-center w-full bg-base-300 space-x-7 h-12">
          {navbarItemsTwo.map((item, index) => {
            return (
              <li key={index}>
                <span className="btn bg-base-300 outline-none border-none">
                  <Link
                    to={item.link}
                    className="flex flex-row justify-center items-center"
                  >
                    {item.text}
                  </Link>
                </span>
              </li>
            );
          })}
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
          <div className="flex flex-col justify-between w-[70%] mt-20 space-y-5">
            {mobileSideBarItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="flex flex-row justify-start items-center w-full text-[20px] font-bold"
                  >
                    <span className="relative">
                      <img src={item.icon} className="w-7" />
                      {item.text === "Cart" ? (
                        <span className="bg-[#E9AF4C] absolute top-0 right-0 rounded-full w-4 h-4 flex items-center justify-center">
                          0
                        </span>
                      ) : null}
                    </span>
                    <span>{item.text}</span>
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
