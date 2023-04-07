import { ActionType } from "./action"

export default function PostReducer(posts = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_POSTS:
            return posts = action.payload.posts
        default:
            return posts
    }
}