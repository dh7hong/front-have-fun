import React, { useState } from "react";
import * as S from "../shared/style/HeaderStyle";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const onClickProfileImage = () => {
    setIsActive((prev) => !prev);
  };

  const image = localStorage.getItem("image");

  const moveToHome = () => {
    navigate("/");
  };

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
          {image && (
            <S.MyProfileImage
              onClick={onClickProfileImage}
              src={image}
              alt="엑박"
            />
          )}
          {!image && (
            <S.MyProfile
              onClick={onClickProfileImage}
              size={60}
              alt="마이페이지"
            />
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
