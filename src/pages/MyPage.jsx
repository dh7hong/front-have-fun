import React, { useEffect, useRef, useState } from "react";
import { store } from "../redux/config/configStore";
import { useDispatch } from "react-redux";
import { addImage } from "../redux/modules/Image";

export default function MyPage() {
  const [isActive, setIsActive] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const ref = useRef(null);

  // useEffect(() => {
  //   const image = localStorage.getItem("image")
  //   if(image) {
  //     dispatch
  //   }
  // })

  const onChangeImage = (event) => {
    const file = event.target.files?.[0];
    if (file === undefined) {
      return;
      //  input 이벤트는 실행 됐으나, 실제 파일이 업로드가 되지 않은 경우  그대로 종료
    } else {
      // 그 외의 경우에는 필요한 기능들이 작동하도록 작성
      console.log("file", file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        dispatch(addImage(event.target?.result));
        localStorage.setItem("image", fileReader.result);
        setImageUrl(fileReader.result);
      };
      setIsActive(true);
    }
  };
  const onClickImageBtn = () => {
    ref.current.click();
  };
  return (
    <div>
      <div>Profile image</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {isActive && (
          <img
            style={{ width: "100px", height: "100px" }}
            src={imageUrl}
            alt="엑박"
          />
        )}
        <button type="button" onClick={onClickImageBtn}>
          이미지 업로드
        </button>
      </div>
      <input
        // style={{ display: "none" }}
        ref={ref}
        onChange={onChangeImage}
        type="file"
      />
    </div>
  );
}
