import axios from "axios";
import { Post } from "../../interfaces/post";
export const getPosts = () => (dispatch) =>
  axios
    .get(`https://simple-blog-api.crew.red/posts`)
    .then((response) => dispatch(successfulLoaded(response.data)));

export const successfulLoaded = (data) => {
  return { type: "SUCCESSFUL_LOADED_POSTS", payload: data };
};
export const successfulAdded = (boolean: boolean) => {
  return {
    type: "ADD_POST_SUCCESSFUL",
    payload: boolean,
  };
};

export const unAdded = (boolean: boolean) => {
  return {
    type: "UNADDED_POST",
    payload: boolean,
  };
};
export const addPost = (post: Post) => {
  return (dispatch) => {
    axios
      .post(`https://simple-blog-api.crew.red/posts`, post)
      .then((res) => {
        dispatch(successfulAdded(true));
      })
      .catch((err) => {
        dispatch(unSuccessfulAdded(false));
      });
  };
};
export const unSuccessfulAdded = (boolean: boolean) => {
  return {
    type: "ADD_POST_UNSUCCESSFUL",
    payload: boolean,
  };
};
