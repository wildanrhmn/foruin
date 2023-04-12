import { ActionType } from "./action"

export default function SubmissionReducer(submission = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_SUBMISSIONS:
            return submission = action.payload.submissions
        default:
            return submission
    }
}