const ActionType = {
    GET_DETAIL_SUBMISSION: 'GET_DETAIL_SUBMISSION',
}

function GetDetailSubmissionAction(details) {
    return {
        type: ActionType.GET_DETAIL_SUBMISSION,
        payload: {
            details
        }
    }
}

export { ActionType, GetDetailSubmissionAction }