import React from "react";
import * as S from "../shared/style/PostStyle";
import { getDate } from "../util/Date";
import { useNavigate } from "react-router-dom";

export default function PostList({ post }) {
  const navigate = useNavigate();
  const moveToDetailedPage = (postId) => () => {
    navigate(`/post/${postId}`);
  };

  return (
    <S.PostStyle>
      <S.RowStyle>
        <S.Row>{post.title}</S.Row>
        <S.Row>{post.contents}</S.Row>
        <S.Row>{getDate()}</S.Row>
        <S.detailedBtnWrapper>
          <button onClick={moveToDetailedPage(post.postId)}>상세보기</button>
        </S.detailedBtnWrapper>
      </S.RowStyle>
    </S.PostStyle>
  );
}
