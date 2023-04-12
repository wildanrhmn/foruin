import { ActionType } from "./action"

export default function DetailSubmissionReducer(detailSubmission = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_DETAIL_SUBMISSION:
            return detailSubmission = action.payload.details
        default:
            return detailSubmission
    }
}