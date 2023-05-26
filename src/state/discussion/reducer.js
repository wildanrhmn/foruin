import { ActionType } from "./action"

export default function DiscussionReducer(discussions = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_DISCUSSION_LIST:
            return discussions = action.payload.discussion || [];
        default:
            return discussions
    }
}