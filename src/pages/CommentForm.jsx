import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/modules/commentSlice';
import { useParams } from 'react-router-dom';
import { addNewComment } from '../api/comments';

const CommentForm = () => {
  const [nickname, setNickname] = useState('');
  const [contents, setContents] = useState('');
  const dispatch = useDispatch();
  const { postId } = useParams();

  const generateUniqueId = () => {
    let now = new Date();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

    return minutes * 60000 + seconds * 1000 + milliseconds;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = generateUniqueId();
    const nickname = localStorage.getItem('userId');
    dispatch(addComment({ commentId: uniqueId, postId, nickname, contents }));

    const commentData = { commentId: uniqueId, postId, nickname, contents};

    addNewComment(postId, commentData);

    setNickname('');
    setContents('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      /> */}
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
