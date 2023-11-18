import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  const isMain = pathname === "/";
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
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
