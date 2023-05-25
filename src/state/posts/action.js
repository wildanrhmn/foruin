const ActionType = {
    GET_ALL_POSTS: 'GET_ALL_POSTS',
    GET_DETAIL_POST: 'GET_DETAIL_POST',
    LIKE_UNLIKE_POST: 'LIKE_UNLIKE_POST',
}

function GetAllPostsAction(posts) {
    console.info(posts)
    return {
        type: ActionType.GET_ALL_POSTS,
        payload: {
            posts
        }
    }
}

function LikeUnlikeAction(id_post, id_user) {
    return {
        type: ActionType.LIKE_UNLIKE_POST,
        payload: {
            id_post,
            id_user
        }
    }
}

export { ActionType, GetAllPostsAction, LikeUnlikeAction }