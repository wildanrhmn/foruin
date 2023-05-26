import { ActionType } from "./action";

export default function DetailPostReducer(detailPost = {}, action = {}) {
  switch (action.type) {
    case ActionType.GET_DETAIL_POST:
      return (detailPost = action.payload.details);
    case ActionType.LIKE_UNLIKE_DETAILPOST:
      const id_user = action.payload.id_user;
      const likes = [...detailPost.likes];

      const index = likes.indexOf(id_user);

      if (index === -1) {
        likes.push(id_user);
      } else {
        likes.splice(index, 1);
      }

      const new_selected_post = { ...detailPost, likes };
      return (detailPost = new_selected_post);
    default:
      return detailPost;
  }
}
