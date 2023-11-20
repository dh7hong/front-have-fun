import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../ui/Layout";
import Home from "../pages/Home";
import NewPost from "../pages/NewPost";
import DetailedPage from "../pages/DetailedPage";
import MyPage from "../pages/MyPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path = "/" element={<Home />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/post/:postId" element={<DetailedPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
