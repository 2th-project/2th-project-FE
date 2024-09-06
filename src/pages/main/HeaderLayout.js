import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default HeaderLayout;
