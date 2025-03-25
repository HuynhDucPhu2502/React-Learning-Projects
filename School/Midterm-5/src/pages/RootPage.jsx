import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const RootPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
