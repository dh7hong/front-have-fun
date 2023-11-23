import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "./Banner";
import Navigation from "./Navigation";

export default function Layout() {
  const { pathname } = useLocation();
  const isMyPage = pathname === "/api/posts";
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Banner />
      {!isMyPage && <Navigation />}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
