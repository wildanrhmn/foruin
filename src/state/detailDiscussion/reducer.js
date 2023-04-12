import { ActionType } from "./action"

export default function DetailDiscussionReducer(detailDiscussion = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_POSTS:
            return detailDiscussion = action.payload.posts
        case ActionType.GET_DETAIL_POST:
            return detailDiscussion = action.payload.details
        default:
            return detailDiscussion
    }
}