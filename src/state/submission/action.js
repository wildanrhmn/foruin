const ActionType = {
    GET_SUBMISSIONS: 'GET_SUBMISSIONS',
}

function GetSubmissionsAction(submissions) {
    return {
        type: ActionType.GET_SUBMISSIONS,
        payload: {
            submissions
        }
    }
}

export { ActionType, GetSubmissionsAction }