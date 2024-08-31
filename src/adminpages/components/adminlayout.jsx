import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./admin-navbar";
import HeadlessDemo from "./sidebar";

const AdminLayout = () => {
  return (
    <>
      <div className="flex flex-row fixed z-50 w-full">
        <HeadlessDemo />
        <AdminNavbar />
      </div>
      <div className="pl-[18rem] pt-[2rem]">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
