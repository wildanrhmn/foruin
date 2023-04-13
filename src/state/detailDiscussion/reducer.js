import { ActionType } from "./action"

export default function DetailDiscussionReducer(detailDiscussion = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_DETAIL_DISCUSSION:
            return detailDiscussion = action.payload.details
        default:
            return detailDiscussion
    }
}