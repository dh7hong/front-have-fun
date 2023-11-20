import React, { useState } from "react";
import * as S from "../shared/style/HeaderStyle";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const imageArr = useSelector((state) => state.songImage.imageArr);
  console.log(imageArr);
  const onClickProfileImage = () => {
    setIsActive((prev) => !prev);
  };

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
          {imageArr[0] && (
            <S.MyProfileImage
              onClick={onClickProfileImage}
              src={imageArr[0]}
              alt="엑박"
            />
          )}
          {!imageArr[0] && (
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
