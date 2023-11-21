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

export default function DetailedPage() {
  const navigate = useNavigate();
  const params = useParams();

  console.log("params", params);
  const { data } = useQuery("post", getPost);
  // const [likedCount, setLikedCount] = useState(0);
  const queryClient = useQueryClient();
  // const [isActive, setIsActive] = useState(false);
  const [comment, setComment] = useState("");

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

  const addCommentMutation = useMutation(addComment, {
    onSuccess: () => {},
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

  const onChangeComment = (event) => {
    setComment(event.target.value);
  };

  const onClickMakeCommentBtn = () => {
    const newComment = {
      id: uuidv4(),
      comment: comment,
    };
    addCommentMutation.mutate(newComment);
  };

  return (
    <S.DetailedPageWrapper>
      <h2>게시물 등록</h2>
      <S.NewBoardWrapper>
        <S.TitleStyle>{detailedInfo?.title}</S.TitleStyle>
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
      <button onClick={moveToList}>목록으로</button>
      <button onClick={deleteBtn(detailedInfo?.postId)}>삭제하기</button>
      <div>
        <h1>댓글</h1>
        <input onChange={onChangeComment} />
        <button onClick={onClickMakeCommentBtn}>작성하기</button>
      </div>
    </S.DetailedPageWrapper>
  );
}
