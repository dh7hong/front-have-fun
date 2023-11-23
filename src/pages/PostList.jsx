import React from "react";
import * as S from "../shared/style/PostStyle";
import { getDate } from "../util/Date";
import { useNavigate } from "react-router-dom";

export default function PostList({ post, keyWord }) {
  const navigate = useNavigate();
  const moveToDetailedPage = (postId) => () => {
    navigate(`api/posts/${postId}`);
  };

  return (
    <S.PostStyle>
      <S.RowStyle>
        <S.Row>{post.postId}</S.Row>
        <S.RowTitle>
          {post.title
            .replaceAll(keyWord, `!@#${keyWord}!@#`)
            .split("!@#")
            .map((el) => (
              <span
                key={post.postId}
                style={{ color: el === keyWord ? "red" : "black" }}
              >
                {el}
              </span>
            ))}
        </S.RowTitle>
        <S.Row>{post.nickname}</S.Row>
        <S.Row>{getDate()}</S.Row>
        <S.detailedBtnWrapper>
          <button onClick={moveToDetailedPage(post.postId)}>상세보기</button>
        </S.detailedBtnWrapper>
      </S.RowStyle>
    </S.PostStyle>
  );
}
