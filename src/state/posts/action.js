const ActionType = {
    GET_POSTS: 'GET_POSTS',
}

function GetPostsAction(posts) {
    return {
        type: ActionType.GET_POSTS,
        payload: {
            posts
        }
    }
}

export { ActionType, GetPostsAction }