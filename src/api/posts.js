import axios from "axios";

export const AddPost = async (newPost) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_GAME_URL}/posts`,
      newPost
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      //보류
    }
  }
};

export const getPost = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_GAME_URL}/posts`);
    return response.data;
  } catch (error) {}
};

export const plusLikeCount = async (target) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_GAME_URL}/posts/${target.id}`,
      {
        likedCount: target.LikedCount,
        isActive: target.isActive,
      }
    );
    return response;
  } catch (error) {}
};

export const deletePost = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_GAME_URL}/posts/${id}`
    );

    return response;
  } catch (error) {}
};

export const addComment = async (target) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_GAME_URL}/posts/${target.id}/comments`,
      target.newComment
    );

    return response;
  } catch (error) {}
};

