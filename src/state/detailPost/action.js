const ActionType = {
    GET_POSTS: 'GET_POSTS',
    GET_DETAIL_POST: 'GET_DETAIL_POST',
    LIKE_UNLIKE_DETAILPOST: 'LIKE_UNLIKE_DETAILPOST'
}

function GetDetailPostAction(details) {
    return {
        type: ActionType.GET_DETAIL_POST,
        payload: {
            details
        }
    }
}

function LikeUnlikeDetailPostAction(id_post, id_user) {
    return {
        type: ActionType.LIKE_UNLIKE_DETAILPOST,
        payload: {
            id_post,
            id_user
        }
    }
}

export { ActionType, GetDetailPostAction, LikeUnlikeDetailPostAction }