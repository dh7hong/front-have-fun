import React, { useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AddPost, getPost } from "../api/posts";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../redux/modules/Count";
import * as S from "../shared/style/NewPostStyle";
import { v4 as uuidv4 } from "uuid";
import { uniq } from "lodash";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [titleError, setTitleError] = useState("");
  const dispatch = useDispatch();
  const idCount = useSelector((state) => state.count);
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const mutation = useMutation(AddPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    const test = event.target.value;
    if (test?.length > 15) {
      alert("15글자까지 입력 가능합니다.");
    } else {
      setTitleError("");
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const generateUniqueId = () => {
    let now = new Date();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

    return minutes * 60000 + seconds * 1000 + milliseconds;
  };

  const onClickSubmitBtn = () => {
    if (!title || !contents) return alert("제목과 내용을 입력하세요");
    const uniqueId = generateUniqueId();
    const newPost = {
      postId: uniqueId,
      title: title,
      contents: contents,
      // likedCount: 0,
      // isActive: false,
    };
    mutation.mutate(newPost);
    localStorage.setItem("id", idCount.count);
    dispatch(addCount());
    alert("정상적으로 등록됐습니다");
  };

  const moveToBoard = () => {
    navigate("/");
  };
  return (
    <S.NewPostWrapper>
      <S.InputWrapper>
        <S.TitleWrapper>
          <label>제목</label>
          <S.TitleInput maxLength={15} onChange={onChangeTitle} />
          <span>{titleError}</span>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <label>내용</label>
          <S.ContentsInput onChange={onChangeContents} />
        </S.ContentsWrapper>
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={onClickSubmitBtn}>등록하기</S.Button>
        <S.Button onClick={moveToBoard}>목록가기</S.Button>
      </S.ButtonWrapper>
    </S.NewPostWrapper>
  );
}
