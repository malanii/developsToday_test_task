import { Post } from "./post";

export interface State {
  posts: Array<Post>;
  newPost: boolean;
  errors: boolean;
}
