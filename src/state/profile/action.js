const ActionType = {
    GET_DETAIL_PROFILE: 'GET_DETAIL_PROFILE',
    LIKE_UNLIKE_PROFILE_POST: 'LIKE_UNLIKE_PROFILE'
}

function GetDetailProfileAction(details) {
    return {
        type: ActionType.GET_DETAIL_PROFILE,
        payload: {
            details
        }
    }
}

function LikeUnlikeProfileAction(id_post, id_user) {
    return {
        type: ActionType.LIKE_UNLIKE_PROFILE_POST,
        payload: {
            id_post,
            id_user
        }
    }
}

export { ActionType, GetDetailProfileAction, LikeUnlikeProfileAction }