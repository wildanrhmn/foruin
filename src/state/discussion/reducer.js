import { ActionType } from "./action"

export default function DiscussionReducer(discussions = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_POSTS:
            return discussions = action.payload.posts
        case ActionType.GET_DETAIL_POST:
            return discussions = action.payload.details
        default:
            return discussions
    }
}