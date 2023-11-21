import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/modules/commentSlice';
import { useParams } from 'react-router-dom';

const CommentForm = () => {
  const [username, setUsername] = useState('');
  const [contents, setContents] = useState('');
  const dispatch = useDispatch();
  const { postId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(postId, username, contents));
    setUsername('');
    setContents('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Comment"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <br />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;