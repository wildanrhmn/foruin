const ActionType = {
    GET_DETAIL_POST: 'GET_DETAIL_POST',
}

function GetDetailPostAction(details) {
    return {
        type: ActionType.GET_DETAIL_POST,
        payload: {
            details
        }
    }
}

export { ActionType, GetDetailPostAction }