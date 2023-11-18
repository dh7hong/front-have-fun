import React from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import { AddPost, getPost } from "../api/posts";
import * as S from "../shared/style/HomeStyle";
import { useNavigate } from "react-router-dom";
import PostList from "./PostList";

export default function Home() {
  const navigate = useNavigate();
  const { isError, isLoading, data } = useQuery("post", getPost);
  const onClickSubmitBtn = () => {
    navigate("/post");
  };

  return (
    <S.HomeWrapper>
      <S.BoardWrapper>
        <S.BoardTitle>작성자</S.BoardTitle>
        <S.BoardTitle>제목</S.BoardTitle>
        <S.BoardTitle>내용</S.BoardTitle>
        <S.BoardTitle>작성날짜</S.BoardTitle>
      </S.BoardWrapper>
      <button onClick={onClickSubmitBtn}>등록하기</button>
      <PostList data={data} />
    </S.HomeWrapper>
  );
}
