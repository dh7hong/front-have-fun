import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../ui/Layout";
import Home from "../pages/Home";
import NewPost from "../pages/NewPost";
import DetailedPage from "../pages/DetailedPage";
import MyPage from "../pages/MyPage";
import Rpg from "../pages/Rpg";
import Sports from "../pages/Sports";
import Fps from "../pages/Fps";
import Arcade from "../pages/Arcade";
import Racing from "../pages/Racing";
import CommentForm from "../pages/CommentForm";
import CommentsList from "../pages/CommentsList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="api/posts" element={<NewPost />} />
          <Route path="/api/posts/:postId" element={<DetailedPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/rpg" element={<Rpg />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/fps" element={<Fps />} />
          <Route path="/arcade" element={<Arcade />} />
          <Route path="/racing" element={<Racing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
