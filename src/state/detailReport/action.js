const ActionType = {
    GET_DETAIL_REPORT: 'GET_DETAIL_REPORT',
}

function GetDetailReportAction(details) {
    return {
        type: ActionType.GET_DETAIL_REPORT,
        payload: {
            details
        }
    }
}

export { ActionType, GetDetailReportAction }