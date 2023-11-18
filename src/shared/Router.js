import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../ui/Layout";
import Home from "../pages/Home";
import NewPost from "../pages/NewPost";
import DetailedPage from "../pages/DetailedPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/post/:id" element={<DetailedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
