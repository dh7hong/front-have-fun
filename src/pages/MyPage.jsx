import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../redux/modules/Image";
import { resetImage } from "../redux/modules/Image";

export default function MyPage() {
  const [isActive, setIsActive] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const ref = useRef(null);

  const onChangeImage = (event) => {
    const file = event.target.files?.[0];
    console.log("file", file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        dispatch(addImage(event.target?.result));
        setImageUrl(fileReader.result);
      }
    };
    setIsActive(true);
  };
  const onClickImageBtn = () => {
    ref.current.click();
  };

  const onClickDeleteImage = () => {
    dispatch(resetImage());
  };
  console.log(imageUrl);
  return (
    <div>
      <div>song image url</div>
      <button type="button" onClick={onClickImageBtn}>
        이미지 업로드
      </button>
      {isActive && (
        <img
          style={{ width: "100px", height: "100px" }}
          src={imageUrl}
          alt="엑박"
        />
      )}
      <button onClick={onClickDeleteImage}>이미지 제거</button>
      {/* 버튼이란 버튼은 전부 onClickSubmitSongBtn을 실행시키네,, submit은 저기 onSubmit 함수 실행시키고 button은 이 버튼의 함수를 실행시킨다 .  */}
      <input
        style={{ display: "none" }}
        ref={ref}
        onChange={onChangeImage}
        type="file"
      />
    </div>
  );
}
