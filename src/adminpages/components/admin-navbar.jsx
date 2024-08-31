import React from "react";
import logo from "../../assets/logo.svg";

const AdminNavbar = () => {
  return (
    <div className="navbar bg-[#39BC3E] h-16">
      <div className="flex flex-1 items-center font-extrabold text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
          />
        </svg>
        <span className="ml-2">Dashboard</span>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex flex-row btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
        <span className="text-white">Ivan Thony</span>
      </div>
    </div>
  );
};

export default AdminNavbar;
