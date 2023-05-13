const ActionType = {
    GET_DETAIL_POST: 'GET_DETAIL_POST',
    LIKE_UNLIKE_POST: 'LIKE_UNLIKE_POST',
}

function GetAllPostsAction(posts) {
    return {
        type: ActionType.GET_DETAIL_POST,
        payload: {
            posts
        }
    }
}

function LikeUnlikeAction(id_user) {
    return {
        type: ActionType.LIKE_UNLIKE_POST,
        payload: {
            id_user
        }
    }
}

export { ActionType, GetAllPostsAction, LikeUnlikeAction }