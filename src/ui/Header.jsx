import React, { useState } from "react";
import * as S from "../shared/style/HeaderStyle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const imageArr = useSelector((state) => state.image.imageArr);
  const onClickProfileImage = () => {
    setIsActive((prev) => !prev);
  };

  const moveToHome = () => {
    navigate("/");
  };
  const image = localStorage.getItem("image");

  const moveToMyPage = () => {
    navigate("/mypage");
    setIsActive(false);
  };
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.Logo onClick={moveToHome} />
        <S.TitleStyle>Hanghae Community</S.TitleStyle>
        <S.MyProfileStyle>
          {imageArr && (
            <S.MyProfileImage
              onClick={onClickProfileImage}
              src={imageArr}
              alt="엑박"
            />
          )}
          {!imageArr && (
            <div>
              {!image && (
                <S.MyProfile
                  onClick={onClickProfileImage}
                  size={60}
                  alt="마이페이지"
                />
              )}
              {image && (
                <S.MyProfileImage
                  src={image}
                  onClick={onClickProfileImage}
                  size={60}
                  alt="마이페이지"
                />
              )}
            </div>
          )}
          {isActive && (
            <S.MypageStyle>
              <button onClick={moveToMyPage}>마이페이지</button>
              <button>로그아웃</button>
            </S.MypageStyle>
          )}
        </S.MyProfileStyle>
      </S.HeaderWrapper>
    </S.Wrapper>
  );
}
