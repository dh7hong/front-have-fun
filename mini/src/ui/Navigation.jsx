import React from "react";
import * as S from "../shared/style/NavigationStyle";
import { useLocation, useNavigate } from "react-router-dom";

const NAVIGATION_BAR = [
  { name: "RPG", navigate: "/rpg" },
  { name: "SPORTS", navigate: "/sports" },
  { name: "FPS", navigate: "/fps" },
  { name: "ARCADE", navigate: "/arcade" },
  { name: "RACING", navigate: "/racing" },
];

export default function Navigation() {
  const navigate = useNavigate();
  

  const onClickBar = (url) => () => {
    navigate(url);
  };
  return (
    <S.NavigateWrapper>
      <S.NavigateBarStyle>
        {NAVIGATION_BAR.map((category) => (
          <S.NavaigateTitle
            key={category.name}
            onClick={onClickBar(category.navigate)}
          >
            {category.name}
          </S.NavaigateTitle>
        ))}
      </S.NavigateBarStyle>
    </S.NavigateWrapper>
  );
}
