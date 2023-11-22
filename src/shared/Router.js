import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

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

export default function Router() {
  const isLoggedIn = !!localStorage.getItem("token"); // Check login status

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
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
