import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import logo from "../../assets/logo.svg";

const HeadlessDemo = () => {
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);

  return (
    <div className="flex justify-content-center">
      <div>
        <div className="min-h-screen flex relative lg:static surface-ground">
          <div
            id="app-sidebar-2"
            className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 border-right-1 surface-border select-none"
            style={{ width: "280px" }}
          >
            <div className="flex flex-column h-full">
              <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                <span className="inline-flex align-items-center gap-2">
                  <span className="font-semibold text-2xl">
                    <div className="flex flex-1 flex-row items-center">
                      <img className="mr-2" src={logo} alt="logo" />
                      <span className="flex flex-col">
                        <span>KINGS</span>
                        <span>ACCESSORIES</span>
                      </span>
                    </div>
                  </span>
                </span>
              </div>
              <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0">
                  <li>
                    <ul className="list-none p-0 m-0 overflow-hidden">
                      <li>
                        <Link
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          to={"/dashboard"}
                        >
                          <i className="pi pi-home mr-2"></i>
                          <span className="font-medium">Dashboard</span>
                          <Ripple />
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          to={"/dashboard/pending-orders"}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48"
                          >
                            <g
                              fill="none"
                              stroke="black"
                              stroke-linejoin="round"
                              stroke-width="4"
                            >
                              <path d="M33.05 7H38a2 2 0 0 1 2 2v33a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7v3h14V7z" />
                              <path
                                stroke-linecap="round"
                                d="M17 4h14v6H17zm10 15l-8 8.001h10.004l-8.004 8"
                              />
                            </g>
                          </svg>
                          <span className="font-medium ml-2">
                            Pending orders
                          </span>
                          <span
                            className="inline-flex align-items-center justify-content-center ml-auto bg-[#39BC3E] text-0 border-circle"
                            style={{ minWidth: "1.5rem", height: "1.5rem" }}
                          >
                            3
                          </span>
                          <Ripple />
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          to={"/dashboard/in-progress"}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="black"
                              d="M19 15c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m-9-7H5v2h5zm7-1h-3v2h3v2.65L13.5 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.5l4.5-5.65V7a2 2 0 0 0-2-2M7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"
                            />
                          </svg>
                          <span className="font-medium ml-2">In Progress</span>
                          <Ripple />
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          to={"/dashboard/completed-delivery"}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 2048 2048"
                          >
                            <path
                              fill="black"
                              d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                            />
                          </svg>
                          <span className="font-medium ml-2">Completed</span>
                          <Ripple />
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          to={"/dashboard/settings"}
                        >
                          <i className="pi pi-cog mr-2"></i>
                          <span className="font-medium">Settings</span>
                          <Ripple />
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a
                  v-ripple
                  className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                >
                  <Avatar
                    image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                    shape="circle"
                  />
                  <span className="font-bold">Amy Elsner</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlessDemo;
