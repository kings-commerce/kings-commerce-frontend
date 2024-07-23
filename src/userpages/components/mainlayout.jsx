import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const MainLayout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>{/* <Footer /> */}</div>
    </>
  );
};

export default MainLayout;
