import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchCommentsByPostId } from './hooks/useComment';
import Space from '../../elements/Space';
import Text from '../../elements/Text';
import Comment from './Comment';
import AddCommentForm from './AddCommentForm';
import flex from '../../utils/flex';
import { colors } from '../../shared/colors';

const Comments = () => {
  const dispatch = useDispatch();
  const { id: postId } = useParams();
  const { data } = useSelector(state => state.comments.commentsByPostId);
  const fetchComments = useFetchCommentsByPostId();
  useEffect(() => {
      fetchComments(postId);
  }, [postId, fetchComments]);

  return (
    <div>
      <AddCommentForm />
      <StCommentList>
        {data.length === 0 ? (
          <Space pd="10px">
            <Text size={14}>No comments.</Text>
          </Space>
        ) : (
          data?.map(comment => <Comment key={comment.id} comment={comment} />)
        )}
      </StCommentList>
    </div>
  );
};

export default Comments;

const StContainer = styled.div`
  height: ${({ isShow }) => (isShow ? '400px' : '50px')};
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: ${colors.get('white')};
  transition: height 400ms ease-in-out;
`;

const StToggleContainer = styled.div`
  ${flex({
    jusify: 'space-between',
  })};
  height: 50px;
  padding: 0 12px;
  border-top: 1px solid ${colors.get('gray')};
`;

const StCommentList = styled.div`
  height: 400px;
  overflow: auto;
`;
