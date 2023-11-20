import React, { useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import { AddPost, getPost } from "../api/posts";
import * as S from "../shared/style/HomeStyle";
import { useNavigate } from "react-router-dom";
import PostList from "./PostList";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [keyWord, setKeyWord] = useState("");
  const [searchPost, setSearchPost] = useState([]);

  const navigate = useNavigate();
  const { data } = useQuery("post", getPost);
  //data = 객체형태로 모든 값들 다있음
  const onClickSubmitBtn = () => {
    navigate("/post");
  };
  const onChangeKeyWord = (event) => {
    setKeyWord(event.target.value);
  };

  const onClickSearchBtn = () => {
    setSearchPost(data.filter((post) => post.title === keyWord));

    console.log("searchPost", searchPost);
    setIsActive(true);
  };

  const onClickAllPost = () => {
    setIsActive(false);
  };

  return (
    <S.Wrapper>
      <S.HomeWrapper>
        <div>
          <input onChange={onChangeKeyWord} placeholder="제목을 입력해주세요" />
          <button onClick={onClickSearchBtn}>검색</button>
        </div>
        <button onClick={onClickAllPost}>전체 글 보기</button>
        <button onClick={onClickSubmitBtn}>등록하기</button>
        <S.BoardWrapper>
          <S.BoardTitle>제목</S.BoardTitle>
          <S.BoardTitle>내용</S.BoardTitle>
          <S.BoardTitle>작성날짜</S.BoardTitle>
          <S.BoardTitle>상세보기</S.BoardTitle>
        </S.BoardWrapper>

        {/* search 기능 */}
        {!isActive && (
          <S.PostStyle>
            {data?.map((post) => (
              <PostList key={post.postId} post={post} />
            ))}
          </S.PostStyle>
        )}
        {isActive && (
          <S.PostStyle>
            {searchPost?.map((post) => (
              <PostList key={post.postId} post={post} />
            ))}
          </S.PostStyle>
        )}
      </S.HomeWrapper>
    </S.Wrapper>
  );
}
