import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  addComment,
  deletePost,
  getOneBoardInfo,
  getPost,
  // plusLikeCount,
} from "../api/posts";
import * as S from "../shared/style/DetailedPage";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../util/Date";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { Button } from "../components/button";

export default function DetailedPage() {
  const navigate = useNavigate();
  const params = useParams();

  console.log("params", params);
  const { data } = useQuery("post", getPost);
  // const [likedCount, setLikedCount] = useState(0);
  const queryClient = useQueryClient();
  // const [isActive, setIsActive] = useState(false);
  // useEffect(() => {
  //   if (data) {
  //     const post = data.find((post) => post.postId === parseInt(params.postId));
  //     setLikedCount(post?.likedCount || 0);
  //     setIsActive(post?.isActive);
  //   }
  // }, [data, params.postId]);

  // const mutation = useMutation(plusLikeCount, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("posts");
  //   },
  // });

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const detailedInfo = data?.find(
    (post) => post.postId === parseInt(params.postId)
  );

  console.log("detailedInfo", detailedInfo);

  // const onClickLikeButton = (postId) => () => {
  //   const LikedCount = likedCount + 1;
  //   mutation.mutate({ postId, LikedCount, isActive: !isActive });
  //   setIsActive(true);
  // };

  // const onClickDislikeButton = (postId) => () => {
  //   const LikedCount = likedCount - 1;
  //   mutation.mutate({ postId, LikedCount, isActive: !isActive });
  //   setIsActive(false);
  // };

  const moveToList = () => {
    navigate("/");
  };

  const deleteBtn = (postId) => () => {
    deleteMutation.mutate(postId);
    navigate("/");
  };

  return (
    <S.DetailedPageWrapper>
      <h2 style={{ color: "white" }}>게시물 등록</h2>
      <S.NewBoardWrapper>
        <h2>제목</h2>
        <S.TitleStyle>{detailedInfo?.title}</S.TitleStyle>
        <h2>내용</h2>
        <S.ContentsStyle> {detailedInfo?.contents}</S.ContentsStyle>
        {/* <S.ThumbsWrapper>
          {!isActive && (
            <S.ThumbsUpStyle
              size={30}
              onClick={onClickLikeButton(detailedInfo?.id)}
            >
              좋아요 누르기
            </S.ThumbsUpStyle>
          )}
          {isActive && (
            <S.ColoredThumbsUp
              size={30}
              onClick={onClickDislikeButton(detailedInfo?.id)}
            >
              좋아요 누르기
            </S.ColoredThumbsUp>
          )}
        </S.ThumbsWrapper>
        좋아요 개수 : {detailedInfo?.likedCount} */}
      </S.NewBoardWrapper>
      <S.ButtonWrapper>
        <Button onClick={moveToList}>목록으로</Button>
        <Button onClick={deleteBtn(detailedInfo?.postId)}>삭제하기</Button>
      </S.ButtonWrapper>
      <div>
        <h2 style={{ color: "white" }}>댓글</h2>
      </div>
      <CommentForm />
      <CommentsList />
    </S.DetailedPageWrapper>
  );
}