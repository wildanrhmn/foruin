const ActionType = {
    GET_REPORTS: 'GET_REPORTS',
}

function GetAllReportAction(reports) {
    return {
        type: ActionType.GET_REPORTS,
        payload: {
            reports
        }
    }
}

export { ActionType, GetAllReportAction }