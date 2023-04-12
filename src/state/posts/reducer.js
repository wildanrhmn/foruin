import { ActionType } from "./action"

export default function PostReducer(posts = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_POSTS:
            return posts = action.payload.posts
        case ActionType.LIKE_UNLIKE_POST:
            const id_user = action.payload.id_user
            const likes = posts.likes

            const index = likes.indexOf(id_user);
            if (index === -1) {
                likes.push(id_user)
            } else {
                likes.splice(index, 1)
            }
            return posts = { ...posts, likes: likes }
        default:
            return posts
    }
}