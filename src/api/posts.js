import axios from "axios";

export const AddPost = async (newPost) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_JSON_SERVER_URL}/posts`,
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
    const response = await axios.get(
      `${process.env.REACT_APP_JSON_SERVER_URL}/posts`
    );
    return response.data;
  } catch (error) {}
};
