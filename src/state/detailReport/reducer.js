import { ActionType } from "./action"

export default function DetailReportReducer(detailReport = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_DETAIL_REPORT:
            return detailReport = action.payload.details
        default:
            return detailReport
    }
}