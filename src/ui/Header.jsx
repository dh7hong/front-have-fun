import React, { useState } from "react";
import * as S from "../shared/style/HeaderStyle";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.HomeOutLined />
        <S.TitleStyle>철민 커뮤니티</S.TitleStyle>
        <S.MyProfileStyle>
          <S.ProfileImage src="picture/avatar.png" alt="마이페이지" />
        </S.MyProfileStyle>
      </S.HeaderWrapper>
    </S.Wrapper>
  );
}
