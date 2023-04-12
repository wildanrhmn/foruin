import { ActionType } from "./action"

export default function ReportReducer(report = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_REPORTS:
            return report = action.payload.reports
        default:
            return report
    }
}