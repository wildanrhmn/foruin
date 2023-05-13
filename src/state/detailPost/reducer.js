import { ActionType } from "./action"

export default function DetailPostReducer(detailPost = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_DETAIL_POST:
            return detailPost = action.payload.details
        default:
            return detailPost
    }
}