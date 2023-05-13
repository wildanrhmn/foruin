const ActionType = {
    GET_DISCUSSION_LIST: 'GET_DISCUSSION_LIST',
}

function GetDiscussionAction(discussion) {
    return {
        type: ActionType.GET_DISCUSSION_LIST,
        payload: {
            discussion
        }
    }
}

export { ActionType, GetDiscussionAction }