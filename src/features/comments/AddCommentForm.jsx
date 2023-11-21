import React from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import Input from "../../elements/Input";
import flex from "../../utils/flex";
import { colors } from "../../shared/colors";
import { useAddComment } from "./hooks/useComment";
import { useInput } from "../../hooks/useInput";

const AddCommentForm = () => {
  const [comment, onChange, onClear] = useInput({
    username: "",
    contents: "",
  });

  const onAddComment = useAddComment(comment, onClear);

  return (
    <StyledForm onSubmit={onAddComment}>
      <StyledNameInput>
        <Input
          placeholder="Enter you name"
          value={comment.username}
          type="text"
          name="username"
          onChange={onChange}
          maxLength={15}
        />
      </StyledNameInput>
      <Input
        placeholder="Enter your comment"
        value={comment.contents}
        name="contents"
        type="text"
        onChange={onChange}
        maxLength={100}
      />
      <Button
        type="submit"
        onClick={onAddComment}
        bgColor={colors.get("gray")}
      >
        Add Comment
      </Button>
    </StyledForm>
  );
};

export default AddCommentForm;

const StyledNameInput = styled.div`
  width: 150px;
`;

const StyledForm = styled.form`
  ${flex({})};
  gap: 12px;
  width: 100%;
  padding: 0 12px;
`;
