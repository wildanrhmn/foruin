import { ActionType } from "./action";

export default function PostReducer(posts = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_ALL_POSTS:
      return (posts = action.payload.posts);
    case ActionType.LIKE_UNLIKE_POST:
      const id_user = action.payload.id_user;
      const id_post = action.payload.id_post;
      const selected_post = posts.find((post) => post.id === id_post);

      if (!selected_post) {
        return posts; // Post not found, return the original state
      }

      const likes = [...selected_post.likes]; // Create a new copy of the likes array

      const index = likes.indexOf(id_user);

      if (index === -1) {
        likes.push(id_user);
      } else {
        likes.splice(index, 1);
      }

      const new_selected_post = { ...selected_post, likes };

      return posts.map((post) => {
        if (post.id === id_post) {
          return new_selected_post;
        } else {
          return post;
        }
      });
    default:
      return posts;
  }
}
