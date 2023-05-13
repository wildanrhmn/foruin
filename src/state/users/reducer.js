import { ActionType } from "./action"

export default function UsersReducer(users = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_POSTS:
            return users = action.payload.posts
        case ActionType.GET_DETAIL_POST:
            return users = action.payload.details
        default:
            return users
    }
}