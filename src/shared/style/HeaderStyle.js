import { HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { CgCommunity } from "react-icons/cg";
import { IoLogoTux } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 80%;
  background-color: rgb(241, 234, 255);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MyProfileStyle = styled.div`
  display: flex;
  cursor: pointer;
  width: 150px;
`;

export const ProfileImage = styled.img`
  box-shadow: 5px 5px 5px 5px gray;
  border-radius: 25px;

  &:hover {
    background-color: black;
  }
`;

export const Logo = styled(IoLogoTux)`
  font-size: 50px;
  box-shadow: 5px 5px 5px 5px gray;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

export const TitleStyle = styled.h1`
  font-family: "Nanum Pen Script", cursive;
`;

export const MypageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyProfile = styled(IoPersonCircle)``;


export const MyProfileImage = styled.img `
  width: 50px;
  height: 50px;

`