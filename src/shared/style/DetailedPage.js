import styled from "styled-components";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

export const DetailedPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 1000px;
  align-items: center;
`;

export const NewBoardWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleStyle = styled.div`
  width: 90%;
  height: 50px;
  border: 1px solid gray;
  margin-bottom: 20px;
`;

export const ContentsStyle = styled.div`
  width: 90%;
  height: 100px;
  border: 1px solid red;
`;

export const ThumbsWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThumbsDownStyle = styled(FaRegThumbsDown)`
  cursor: pointer;
`;

export const ColoredThumbsUp = styled(FaThumbsUp)`
  cursor: pointer;
`;

export const ThumbsUpStyle = styled(FaRegThumbsUp)`
  cursor: pointer;
`;
