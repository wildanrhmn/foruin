const ActionType = {
    GET_DETAIL_PROFILE: 'GET_DETAIL_PROFILE',
}

function GetDetailProfileAction(details) {
    return {
        type: ActionType.GET_DETAIL_PROFILE,
        payload: {
            details
        }
    }
}

export { ActionType, GetDetailProfileAction }