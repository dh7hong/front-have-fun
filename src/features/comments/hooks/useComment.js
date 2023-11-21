import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearComment, globalEditModeToggle, getComment } from '../../../redux/modules/commentSlice';
import { addComment, deleteComment, updateComment } from '../../../redux/modules/commentsSlice';
import axios from 'axios';
import { setCommentsByPostId } from '../../../redux/modules/commentsSlice';


/*--------------------------------------------------------*
 * 댓글 추가
 *-------------------------------------------------------*/

export const useAddComment = (commentData, onClear) => {
  const { id: postId } = useParams();
  const dispatch = useDispatch();

  const onAddComment = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_GAME_URL}/comments`, {
        ...commentData, 
        postId,
      });
      dispatch(addComment(response.data));
      onClear();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return onAddComment;
};

/*--------------------------------------------------------*
 * 댓글 수정 - 수정모드로 진입하고 상세 comment 조회
 *-------------------------------------------------------*/

export const useGetUpdateComment = (setIsEdit) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  const { content: oldContent } = useSelector(state => state.comment.data);

  const onUpdateCommentHandler = async (comment) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_GAME_URL}/comments/${comment.id}`, { ...comment, contents: newComment });
      dispatch(updateComment(response.data));
      setIsEdit(false);
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  return { setNewComment, onUpdateCommentHandler, oldContent };
};

/*--------------------------------------------------------*
 * 댓글 삭제
 *-------------------------------------------------------*/

export const useDeleteComment = () => {
  const dispatch = useDispatch();

  const onDeleteCommentHandler = async (id) => {
    const result = window.confirm('삭제하시겠습니까?');
    if (result) {
      try {
        await axios.delete(`${process.env.REACT_APP_GAME_URL}/comments/${id}`);
        dispatch(deleteComment(id));
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    }
  };

  return onDeleteCommentHandler;
};

/*--------------------------------------------------------*
 * 댓글 수정모드 - 수정모드에서 취소버튼을 눌렀을 때
 *-------------------------------------------------------*/

export const useCancelButton = (setIsEdit) => {
  const dispatch = useDispatch();

  const onCancelButtonHandler = () => {
    setIsEdit(false);
    dispatch(clearComment());
    dispatch(globalEditModeToggle(false));
  };

  return onCancelButtonHandler;
};

/*--------------------------------------------------------*
 * 댓글 수정모드 - 수정모드에서 확인 버튼을 눌렀을 때
 *-------------------------------------------------------*/

export const useEditComment = (setIsEdit) => {
  const dispatch = useDispatch();

  const handler = async (id) => {
    setIsEdit(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_GAME_URL}/comments/${id}`);
      dispatch(getComment(response.data));
    } catch (error) {
      console.error('Error fetching comment:', error);
      // Handle error appropriately (e.g., show an error message)
    }
    dispatch(globalEditModeToggle(true));
  };

  return handler;
};

export const useFetchCommentsByPostId = () => {
  const dispatch = useDispatch();

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_GAME_URL}/comments?postId=${postId}`);
      dispatch(setCommentsByPostId(response.data));
    } catch (error) {
      console.error('Error fetching comments:', error);
      // Handle errors appropriately
    }
  };

  return fetchComments;
};