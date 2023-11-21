import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CommentsList = () => {
  const { postId } = useParams();
  const comments = useSelector((state) =>
    state.comments.comments.filter((comment) => comment.postId === postId)
  );

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.commentId}>
          <strong>{comment.username}:</strong> {comment.contents}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
