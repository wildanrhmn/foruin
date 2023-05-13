import { ActionType } from "./action"

export default function ProfileReducer(profile = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_POSTS:
            return profile = action.payload.posts
        case ActionType.GET_DETAIL_POST:
            return profile = action.payload.details
        default:
            return profile
    }
}