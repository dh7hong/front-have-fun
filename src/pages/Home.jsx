import React, { useState } from "react";
import { useQuery } from "react-query";
import { AddPost, getPost } from "../api/posts";
import * as S from "../shared/style/HomeStyle";
import { useNavigate } from "react-router-dom";
import PostList from "./PostList";
import Pagination from "./Pagination";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [keyWord, setKeyWord] = useState("");
  const [searchPost, setSearchPost] = useState([]);

  const navigate = useNavigate();
  const { data } = useQuery("posts", getPost);
  //data = 객체형태로 모든 값들 다있음
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  const onClickSubmitBtn = () => {
    navigate("/api/posts");
  };
  const onChangeKeyWord = (event) => {
    setKeyWord(event.target.value);
  };

  const postsData = () => {
    if (data) {
      let result = data?.slice(offset, offset + limit);
      return result;
    }
  };

  const onClickSearchBtn = () => {
    setSearchPost(data.filter((post) => post.title.includes(keyWord)));
    setIsActive(true);
  };

  const onClickAllPost = () => {
    setIsActive(false);
  };

  console.log("data", data);

  return (
    <S.Wrapper>
      <S.HomeWrapper>
        <S.HeaderWrapper>
          <h2> 자유게시판 </h2>
          <div>
            <S.SearchInput
              value={keyWord}
              onChange={onChangeKeyWord}
              placeholder="제목을 입력해주세요"
            />
            <S.AllPostBtn onClick={onClickSearchBtn}>검색</S.AllPostBtn>
            <S.AllPostBtn onClick={onClickAllPost}>전체 글 보기</S.AllPostBtn>
          </div>
        </S.HeaderWrapper>
        <S.BoardWrapper>
          <S.BoardTitle>번호</S.BoardTitle>
          <S.BoardTitleStyle>제목</S.BoardTitleStyle>
          <S.BoardTitle>작성날짜</S.BoardTitle>
          <S.BoardTitle>상세보기</S.BoardTitle>
        </S.BoardWrapper>

        {/* search 기능 */}
        {!isActive && (
          <S.PostStyle>
            {postsData(data)?.map((post) => (
              <PostList key={post.postId} post={post} />
            ))}
          </S.PostStyle>
        )}
        {isActive && (
          <S.PostStyle>
            {searchPost?.map((post) => (
              <PostList key={post.postId} post={post} keyWord={keyWord} />
            ))}
          </S.PostStyle>
        )}
        <Pagination page={page} setPage={setPage} data={data} />
        <S.SubmitBtnWrapper>
          <S.AllPostBtn onClick={onClickSubmitBtn}>등록하기</S.AllPostBtn>
        </S.SubmitBtnWrapper>
      </S.HomeWrapper>
    </S.Wrapper>
  );
}
