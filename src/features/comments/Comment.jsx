import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { VscTrash } from "react-icons/vsc";
import { VscEdit } from "react-icons/vsc";
import  Button from "../../elements/Button";
import Text from "../../elements/Text";
import Input from "../../elements/Input";

import flex from "../../utils/flex";
import { colors } from "../../shared/colors";
import {
  useCancelButton,
  useDeleteComment,
  useEditComment,
  useGetUpdateComment,
} from "./hooks/useComment";

const Comment = ({ comment }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { isGlobalEditmode } = useSelector((state) => state.comment);

  const onDeleteCommentHandler = useDeleteComment();
  const { onUpdateCommentHandler, setNewComment, oldContent } =
    useGetUpdateComment(setIsEdit);

  const onCancelButtonHandler = useCancelButton(setIsEdit);
  const onChangeEditButtonHandler = useEditComment(setIsEdit);

  return (
    <>
      <StyledComment>
        {isEdit ? (
          <>
            <StyledInputWrapper>
              <Input
                type="text"
                defaultValue={oldContent}
                maxLength={100}
                onChange={(e) => {
                  setNewComment(e.target.value);
                }}
              />
            </StyledInputWrapper>
            <StyledControlGroup>
              <Button
                size="small"
                bgColor={colors.get("teal")}
                onClick={onCancelButtonHandler}
              >
                <Text color={colors.get("white")}>Cancel</Text>
              </Button>
              <Button
                size="small"
                bgColor={colors.get("teal")}
                onClick={() => onUpdateCommentHandler(comment)}
              >
                <Text color={colors.get("white")}>Save</Text>
              </Button>
            </StyledControlGroup>
          </>
        ) : (
          <>
            <StyledInputWrapper>
              <Text>{comment.username}</Text>
              <Text size="16">{comment.contents}</Text>
            </StyledInputWrapper>

            <StyledControlGroup>
              <Button
                size="small"
                bgColor={colors.get("orange")}
                disabled={isGlobalEditmode}
                onClick={() => onChangeEditButtonHandler(comment.id)}
              >
                <VscEdit size="16" color={colors.get("white")} />
              </Button>
              <Button
                size="small"
                bgColor={colors.get("orange")}
                onClick={() => onDeleteCommentHandler(comment.id)}
                disabled={isGlobalEditmode}
              >
                <VscTrash size="16" color={colors.get("white")} />
              </Button>
            </StyledControlGroup>
          </>
        )}
      </StyledComment>
    </>
  );
};

export default Comment;

const StyledComment = styled.div`
  ${flex({
    jusify: "space-between",
  })}
  border-bottom: 1px solid ${colors.get("gray")};
  height: 70px;
  padding: 0 12px;
`;

const StyledControlGroup = styled.div`
  ${flex({})}
  flex-shrink: 0;
  gap: 3px;
`;

const StyledInputWrapper = styled.div`
  width: 70%;
`;
