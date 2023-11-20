import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { addComment, deletePost, getPost, plusLikeCount } from "../api/posts";
import * as S from "../shared/style/DetailedPage";
import { v4 as uuidv4 } from "uuid";

export default function DetailedPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [likedCount, setLikedCount] = useState(0);
  const queryClient = useQueryClient();
  const { data } = useQuery("post", getPost);
  const [isActive, setIsActive] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (data) {
      const post = data.find((post) => post.id === params.id);
      setLikedCount(post?.likedCount || 0);
      setIsActive(post?.isActive);
    }
  }, [data, params.id]);

  //마운트 된 이후

  const mutation = useMutation(plusLikeCount, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
    },
  });

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
    },
  });

  const addCommentMutation = useMutation(addComment, {
    onSuccess: () => {},
  });
  const detailedInfo = data?.find((post) => post.id === params.id);

  const onClickLikeButton = (id) => () => {
    const LikedCount = likedCount + 1;
    mutation.mutate({ id, LikedCount, isActive: !isActive });
    setIsActive(true);
  };

  const onClickDislikeButton = (id) => () => {
    const LikedCount = likedCount - 1;
    mutation.mutate({ id, LikedCount, isActive: !isActive });
    setIsActive(false);
  };

  console.log("detailedInfo", detailedInfo);

  const moveToList = () => {
    navigate("/");
  };

  const deleteBtn = (id) => () => {
    deleteMutation.mutate(id);
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
        <S.ThumbsWrapper>
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
        좋아요 개수 : {detailedInfo?.likedCount}
      </S.NewBoardWrapper>
      <button onClick={moveToList}>목록으로</button>
      <button onClick={deleteBtn(detailedInfo?.id)}>삭제하기</button>
      <div>
        <h1>댓글</h1>
        <input onChange={onChangeComment} />
        <button onClick={onClickMakeCommentBtn}>작성하기</button>
      </div>
    </S.DetailedPageWrapper>
  );
}
