const ActionType = {
    GET_DETAIL_DISCUSSION: 'GET_DETAIL_DISCUSSION',
}

function GetDetailDiscussionAction(details) {
    return {
        type: ActionType.GET_DETAIL_DISCUSSION,
        payload: {
            details
        }
    }
}

export { ActionType, GetDetailDiscussionAction }