import React, { useState } from "react";
import { QueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AddPost } from "../api/posts";
import { v4 as uuidv4 } from "uuid";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const mutation = useMutation(AddPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
    },
  });

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmitBtn = () => {
    const newPost = {
      id: uuidv4(),
      title,
      contents,
      likedCount: 0,
      isActive: false,
    };
    mutation.mutate(newPost);
    alert("정상적으로 등록됐습니다");
  };

  const moveToBoard = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        제목: <input onChange={onChangeTitle} />
        내용: <input onChange={onChangeContents} />
      </div>
      <button onClick={onClickSubmitBtn}>등록하기</button>
      <button onClick={moveToBoard}>목록가기</button>
    </div>
  );
}
