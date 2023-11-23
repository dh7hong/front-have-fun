import axios from "axios";

export const AddPost = async (newPost) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_TEST_URL}/api/posts`,
      newPost
    );

    return response.data;
  } catch (error) {
    if (error.response) {
    }
  }
};

export const getOneBoardInfo = async (postId) => {
  try {
    const response = await axios(
      `${process.env.REACT_APP_TEST_URL}/api/posts/${postId}`
    );
    return response;
  } catch (error) {}
};

export const getPost = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_TEST_URL}/api/posts`
    );
    return response.data;
  } catch (error) {}
};

// export const plusLikeCount = async (target) => {
//   try {
//     const response = await axios.patch(
//       `${process.env.REACT_APP_GAME_URL}/api/posts/${target.postId}`,
//       {
//         likedCount: target.LikedCount,
//         isActive: target.isActive,
//       }
//     );
//     return response;
//   } catch (error) {}
// };

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_TEST_URL}/api/posts/${postId}`
    );

    return response;
  } catch (error) {}
};

export const addComment = async (target) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_TEST_URL}/api/posts/${target.id}/comments`,
      target.newComment
    );

    return response;
  } catch (error) {}
};

// export const addImage = async (image) => {
//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_GAME_URL}/images`,
//       image
//     );
//     return response;
//   } catch (error) {}
// };
