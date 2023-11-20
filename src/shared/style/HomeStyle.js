import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardWrapper = styled.div`
  width: 1028px;
  background-color: rgb(255, 229, 229);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BoardTitle = styled.span`
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
`;

export const PostStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
