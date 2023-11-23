import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCommentsByPostId } from '../api/comments';
import { setComments } from '../redux/modules/commentSlice';

const CommentsList = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) =>
    state.comments.comments.filter((comment) => comment.postId === postId)
  );

  useEffect(() => {
    const fetchComments = async () => {
      const fetchedComments = await getCommentsByPostId(postId);
      dispatch(setComments(fetchedComments)); // Update comments in Redux store
    };

    fetchComments();
  }, [postId, dispatch]);
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.commentId}>
          <strong>{comment.nickname}:</strong> {comment.contents} {comment.commentId}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
