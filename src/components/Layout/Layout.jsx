import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import MovieContextProvider from "../../context/MovieContextProvider";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MovieContextProvider>
        <Outlet />
      </MovieContextProvider>
    </>
  );
};

export default Layout;
